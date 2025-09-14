import { useState, useMemo } from 'react';
import {
  Card,
  Grid,
  Flex,
  Select,
  Input,
  IconButton,
  Text,
  Box,
  Button,
  Skeleton,
  useToast,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { DownloadIcon, CheckIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useProducts } from '@/widgets/products/hooks/use-products';
import { useBalance } from '@/hooks/user/useBalance';

export function OrderCreateCard({ onNextStep }) {
  const { t } = useTranslation('orders');
  const toast = useToast();
  const { data: products, isLoading } = useProducts();
  const { data: balance } = useBalance();
  const [rows, setRows] = useState([]);
  const [errors, setErrors] = useState({});

  console.log(t('phone_label'));

  const addRow = () => setRows([...rows, { productId: '', order: '' }]);

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
    setErrors((prev) => {
      const newErr = { ...prev };
      delete newErr[index];
      return newErr;
    });
  };

  const isFilled = (row) => row.productId && row.order !== '';

  // Баланс минус уже введённые заказы (кроме текущей строки)
  const getRemainingBalance = (currentIndex) => {
    const used = rows.reduce(
      (sum, r, i) =>
        i !== currentIndex ? sum + (parseFloat(r.order) || 0) : sum,
      0
    );
    return Math.max((balance?.grams || 0) - used, 0);
  };

  const handleOrderChange = (index, value) => {
    let numValue = parseFloat(value);
    if (isNaN(numValue)) numValue = 0;

    const remaining = getRemainingBalance(index);
    if (numValue > remaining) {
      numValue = remaining;
      toast({
        title: t('insufficient_balance'),
        description: t('you_only_have', { grams: remaining }),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setErrors((prev) => ({ ...prev, [index]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [index]: false }));
    }

    setRows((prev) =>
      prev.map((r, i) => (i === index ? { ...r, order: numValue } : r))
    );
  };

  const totalWeight = useMemo(
    () => rows.reduce((sum, row) => sum + (parseFloat(row.order) || 0), 0),
    [rows]
  );

  if (!products) return 'Loading...';

  const selectedProductIds = rows.map((r) => r.productId).filter(Boolean);

  return (
    <Card bg="#2B3143" p={6} borderRadius="xl" color="white">
      <Grid
        templateColumns="2fr 1fr 1fr 40px 40px"
        gap={4}
        fontWeight="bold"
        mb={4}
      >
        <Text>{t('variety')}</Text>
        <Text>{t('available_g')}</Text>
        <Text>{t('order_g')}</Text>
        <Box />
        <Box />
      </Grid>

      {rows.map((row, i) => {
        const filled = isFilled(row);
        const product = products.find((p) => p.id === row.productId);
        const remaining = getRemainingBalance(i);

        const availableOptions = products.filter(
          (p) => !selectedProductIds.includes(p.id) || p.id === row.productId
        );

        return (
          <Grid
            key={i}
            templateColumns="2fr 1fr 1fr 40px 40px"
            gap={4}
            mb={4}
            alignItems="center"
          >
            <Flex
              border={filled ? '1px solid #FFD700' : 'none'}
              borderRadius="md"
              align="center"
              paddingLeft={filled ? '1rem' : 0}
            >
              {isLoading ? (
                <Skeleton height="40px" width="full" borderRadius="md" />
              ) : (
                <Select
                  placeholder={t('select_placeholder')}
                  color="white"
                  value={row.productId}
                  borderColor="transparent"
                  _hover={{ borderColor: 'transparent' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent' }}
                  bg="transparent"
                  onChange={(e) => {
                    setRows((prev) =>
                      prev.map((r, idx) =>
                        idx === i
                          ? {
                              ...r,
                              productId: parseInt(e.target.value),
                              order: '',
                            }
                          : r
                      )
                    );
                  }}
                >
                  {availableOptions.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
              )}
            </Flex>

            <Input
              value={product?.stockGrams || 0}
              isReadOnly
              border={filled ? '1px solid #FFD700' : 'none'}
              borderRadius="md"
              textAlign="center"
            />

            <InputGroup>
              <Input
                value={row.order}
                type="number"
                min={0}
                max={remaining}
                onChange={(e) => handleOrderChange(i, e.target.value)}
                border={
                  errors[i]
                    ? '2px solid red'
                    : filled
                    ? '1px solid #FFD700'
                    : 'none'
                }
                borderRadius="md"
                textAlign="center"
                placeholder={!filled ? '—' : ''}
              />
              <InputRightAddon
                children={`${row.order || 0} / ${Math.min(
                  product?.stockGrams || 0,
                  remaining
                )} g`}
              />
            </InputGroup>

            {filled && (
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete"
                variant="ghost"
                color="white"
                onClick={() => deleteRow(i)}
              />
            )}
          </Grid>
        );
      })}

      <Text mt={4} fontWeight="bold" fontSize="lg" color="#FFD700">
        {t('total_weight', { totalWeight })}
      </Text>

      <Flex mt={4} gap={3}>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          variant="outline"
          borderColor="#FFD700"
          color="#FFD700"
          _hover={{ bg: 'rgba(255,215,0,0.1)' }}
          onClick={addRow}
        >
          {t('add_variety')}
        </Button>

        <Button
          colorScheme="yellow"
          bg="#FFD700"
          color="black"
          _hover={{ bg: '#e6c200' }}
          onClick={() => {
            const newErrors = {};
            let hasError = false;

            rows.forEach((row, i) => {
              const numValue = parseFloat(row.order) || 0;
              if (
                !row.productId ||
                numValue <= 0 ||
                numValue > getRemainingBalance(i) + numValue
              ) {
                newErrors[i] = true;
                hasError = true;
              }
            });

            setErrors(newErrors);

            if (hasError) {
              toast({
                title: t('validation_error'),
                description: t('check_your_orders'),
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              return;
            }

            // Собираем payload и передаем родителю
            const payload = rows.map((r) => ({
              productId: r.productId,
              grams: parseFloat(r.order),
            }));
            console.log('Order payload:', payload);

            onNextStep(payload);
          }}
          isDisabled={rows.length === 0}
        >
          {t('confirm_varieties')}
        </Button>
      </Flex>
    </Card>
  );
}

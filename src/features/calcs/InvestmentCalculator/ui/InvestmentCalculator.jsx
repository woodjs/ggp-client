import * as Yup from 'yup';
import { QuestionPin } from '@/shared/ui';
import { useTranslation } from 'next-i18next';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { formatCurrency } from '@/shared/lib';
import {
  getIncomeForCycle,
  getIncomeForYear,
  getPercentByAmount,
  minPrice,
} from '../lib';
import { useInvestNFT } from '../model';

export function InvestmentCalculator() {
  const { mutate, isLoading } = useInvestNFT();
  const { t } = useTranslation('store');

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .typeError(t('condition-1'))
      .min(50, t('min-sum'))
      .required(t('required')),
  });

  const formik = useFormik({
    initialValues: {
      amount: minPrice,
      reinvest: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) =>
      mutate(values, {
        onSuccess: () => resetForm(),
      }),
  });
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;
  const percent = getPercentByAmount(values.amount);
  const incomeForCycle = getIncomeForCycle(values.amount, percent);
  const incomeForYear = getIncomeForYear(values.amount, values.reinvest);

  return (
    <Stack spacing="20px" w="full">
      <FormControl isInvalid={errors.amount && touched.amount}>
        <FormLabel fontWeight="bold">{t('sum')}</FormLabel>
        <InputGroup>
          <Input
            pr="4.5rem"
            name="amount"
            type="number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.amount}
          />
          <InputRightElement width="4.5rem">USDT</InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.amount}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">{t('pick-period')}</FormLabel>
        <Button borderRadius="32px" h="32px" p="7px 16px 8px">
          1 {t('year')}
        </Button>
      </FormControl>
      <FormControl>
        <Checkbox
          isChecked={values.reinvest}
          colorScheme={useColorModeValue('green', 'yellow')}
          onChange={handleChange}
          name="reinvest"
        >
          {t('with-reinvest')} <QuestionPin label={t('what-is-reinvest')} />
        </Checkbox>
      </FormControl>

      <VStack w="full" flexWrap="wrap" alignItems="flex-start">
        <Box flex={1} minW="190px">
          <Text color="brandGray.200" fontWeight="bold">
            {t('percent')}
          </Text>
          <Text fontSize="18px">{percent * 100}%</Text>
        </Box>
        <Box flex={1} minW="190px">
          <Text color="brandGray.200" fontWeight="bold">
            {t('monthly-revenue')}
          </Text>
          <Text fontSize="18px">
            {formatCurrency({ amount: incomeForCycle })}
          </Text>
        </Box>
        <Box flex={1} minW="190px">
          <Text color="brandGray.200" fontWeight="bold">
            {t('yearly-revenue')}
          </Text>
          <Text fontSize="18px">
            {formatCurrency({ amount: incomeForYear })}
          </Text>
        </Box>
      </VStack>
      <Button
        isDisabled={values.amount < minPrice}
        onClick={handleSubmit}
        isLoading={isLoading}
      >
        {t('invest')}
      </Button>
    </Stack>
  );
}

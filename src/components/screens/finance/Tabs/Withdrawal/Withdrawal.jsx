import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
} from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { CurrencySelect } from '../CurrencySelect';

function WithdrawalForm({
  formik,
  requisites,
  totalAmount,
  handleAmountChange,
  handleMaxClick,
  currency,
  setCurrency,
  defaultCommission,
}) {
  const { t } = useTranslation('finance');

  return (
    <Card p="30px">
      <Stack spacing={6}>
        {/* <Box>
          <FormLabel fontWeight="bold">{t('select-wallet')}</FormLabel>
          <CurrencySelect currency={currency} setCurrency={setCurrency} />
        </Box> */}

        <FormControl
          isInvalid={formik.touched.amount && !!formik.errors.amount}
        >
          <FormLabel fontWeight="bold">{t('amount')}</FormLabel>

          <InputGroup size="md" w="full">
            <NumberInput min={10} value={formik.values.amount} w="full">
              <NumberInputField
                name="amount"
                onChange={(e) => {
                  handleAmountChange(e.target.value);
                  formik.handleChange(e);
                }}
              />
              {/* <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="md" onClick={handleMaxClick}>
                  Max
                </Button>
              </InputRightElement> */}
            </NumberInput>
          </InputGroup>

          <FormErrorMessage>
            {t(formik.errors.amount, {
              amount: 20,
            })}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.amount && !!formik.errors.amount}
        >
          <FormLabel fontWeight="bold">
            {t('payment-address', { name: 'SOL' })}
          </FormLabel>

          <Input name="amount" />

          <FormErrorMessage>
            {t(formik.errors.amount, {
              amount: 20,
            })}
          </FormErrorMessage>
        </FormControl>

        {/* <FormControl
					isInvalid={formik.touched.requisiteId && !!formik.errors.requisiteId}
				>
					<FormLabel fontWeight="bold">{t('requisite-title')}</FormLabel>

					<Select
						name="requisiteId"
						onChange={formik.handleChange}
						value={formik.values.requisiteId}
					>
						<option value="">{t('requsite-select')}</option>
						{requisites
							? requisites.map((item) => (
									<option key={item.id} value={item.id}>
										{item.name && `${item.name} - `}{' '}
										{`${item.value.slice(0, 7)}...`}
									</option>
							  ))
							: null}
					</Select>
					<FormErrorMessage>{t(formik.errors.requisiteId)}</FormErrorMessage>
				</FormControl> */}

        <FormControl>
          <FormLabel fontWeight="bold">{t('withdrawal-total')}</FormLabel>

          <Input isReadOnly isDisabled value={totalAmount} />

          <FormHelperText>
            <HStack mt="7px" alignItems="center">
              <FormHelperText mt="0">
                {/* {t('withdrawal.time')} {t('commission')}: {defaultCommission}%{' '} */}
                {t('auto_deposit_info')}
              </FormHelperText>
            </HStack>
          </FormHelperText>
        </FormControl>

        <Button onClick={formik.handleSubmit}>{t('btn-withdrawal')}</Button>
      </Stack>
    </Card>
  );
}

export default WithdrawalForm;

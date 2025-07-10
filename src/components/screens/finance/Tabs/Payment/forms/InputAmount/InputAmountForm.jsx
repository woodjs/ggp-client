import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import { FastField, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { getInputAmountFormSchema } from './InputAmountForm.schema';

function InputAmountForm({
  amount,
  minAmount,
  maxAmount,
  baseCurrency,
  // handleChange,
  handleClick,
}) {
  const { t } = useTranslation('finance');
  return (
    <Stack>
      <Formik
        initialValues={{
          amount,
        }}
        validationSchema={getInputAmountFormSchema(minAmount, maxAmount)}
        onSubmit={(values) => {
          handleClick(Number(values.amount));
        }}
      >
        {({ handleSubmit }) => (
          <Stack spacing={6} w="full">
            <FastField name="amount">
              {({ field, meta }) => (
                <FormControl isInvalid={meta.touched && meta.error}>
                  <FormLabel fontWeight="bold">
                    {t('payment-input-amount', {
                      amount: minAmount,
                      currency: baseCurrency,
                    })}
                  </FormLabel>
                  <InputGroup>
                    <Input pr="4.5rem" type="number" {...field} />

                    <InputRightElement
                      w="4.5rem"
                      bg="blackAlpha.200"
                      color="brandGray.200"
                      borderRightRadius="md"
                    >
                      {baseCurrency}
                    </InputRightElement>
                  </InputGroup>

                  <FormErrorMessage>{t(meta.error)}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <Button w="full" onClick={handleSubmit}>
              {t('payment-btn')}
            </Button>
          </Stack>
        )}
      </Formik>

      {baseCurrency !== 'USDT' && (
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            Конвертация при пополнений производится по курсу{' '}
            <Link
              href="https://www.coingecko.com/"
              target="_blank"
              textDecor="underline"
            >
              coingecko.com
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </Stack>
  );
}

export default InputAmountForm;

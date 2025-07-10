import { Card } from '@/components/Card';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

function Exchange() {
  const { t } = useTranslation();
  const initialFromOptions = [
    { value: 'ggt', label: 'GGT', min: 2 },
    { value: 'btc', label: 'BTC', min: 0.0001 },
    { value: 'usdt', label: 'USDT', min: 5 },
  ];
  const initialToOptions = [
    { value: 'ggt', label: 'GGT', min: 2 },
    { value: 'btc', label: 'BTC', min: 0.0001 },
    { value: 'usdt', label: 'USDT', min: 5 },
  ];
  const fromOptions = initialFromOptions;
  const [fromSelectedOption, setFromSelectedOption] = useState(fromOptions[0]);
  const [toOptions, setToOptions] = useState(
    initialToOptions.filter((option) => option.value !== fromOptions[0].value)
  );
  const getCooeficient = (from, to) => {
    if (from.value === 'usdt' && to.value === 'btc') return 0.0001;
    if (from.value === 'btc' && to.value === 'usdt') return 10000;
    if (from.value === 'usdt' && to.value === 'ggt') return 0.01;
    if (from.value === 'ggt' && to.value === 'usdt') return 100;
    if (from.value === 'btc' && to.value === 'ggt') return 1000;
    if (from.value === 'ggt' && to.value === 'btc') return 0.001;
    return 1;
  };
  const [toSelectedOption, setToSelectedOption] = useState(toOptions[0]);

  const [coefficient, setCoefficient] = useState(
    getCooeficient(fromSelectedOption, toSelectedOption)
  );
  const onFromOptionSelect = (option, setFieldValue, validateField, values) => {
    setFromSelectedOption(option);
    const newToOptions = initialToOptions.filter(
      ({ value }) => value !== option.value
    );
    setToOptions(newToOptions);
    let newToSelectedOption = toSelectedOption;
    if (toSelectedOption.value === option.value) {
      // eslint-disable-next-line prefer-destructuring
      newToSelectedOption = newToOptions[0];
      setToSelectedOption(newToOptions[0]);
    }
    const newCoefficient = getCooeficient(option, newToSelectedOption);
    setCoefficient(newCoefficient);
    setTimeout(() => {
      setFieldValue('toAmount', values.fromAmount * newCoefficient);
      validateField('fromAmount');
    }, 0);
  };
  const onToOptionSelect = (option, setFieldValue, validateField, values) => {
    const newCoefficient = getCooeficient(fromSelectedOption, option);
    setToSelectedOption(option);
    setCoefficient(newCoefficient);
    setTimeout(() => {
      setFieldValue('toAmount', values.fromAmount * newCoefficient);
      validateField('fromAmount');
    }, 0);
  };
  return (
    <Formik
      initialValues={{
        fromAmount: '',
        toAmount: '',
      }}
      validate={(values) => {
        const errors = {};
        const minAmount = fromSelectedOption.min;
        if (Number.isNaN(values.fromAmount)) {
          errors.fromAmount = t('cabinet:error-4');
        } else if (values.fromAmount < minAmount) {
          errors.fromAmount = t('cabinet:error-2') + minAmount;
        }
        // check toAmount is a number
        if (Number.isNaN(values.toAmount)) {
          errors.toAmount = t('cabinet:error-4');
        }
        return errors;
      }}
      //   validationSchema={getExchangeSchema(fromSelectedOption.min)}
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        alert(
          JSON.stringify({
            ...values,
            from: fromSelectedOption,
            to: toSelectedOption,
          })
        );
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        validateField,
        values,
        setFieldValue,
        touched,
        errors,
      }) => (
        <VStack justify="start" align="stretch">
          <Stack direction={{ base: 'column' }}>
            <Card p="20px" flexGrow="1">
              <VStack spacing="20px" align="stretch">
                <FormControl>
                  <FormLabel fontSize="xl" fontWeight="bold">
                    {t('cabinet:finance-exchange-give')}
                  </FormLabel>
                  <Select
                    instanceId="fromSelect"
                    // selectedOptionColor="green"
                    value={fromSelectedOption}
                    onChange={(option) =>
                      onFromOptionSelect(
                        option,
                        setFieldValue,
                        validateField,
                        values
                      )
                    }
                    defaultValue={fromSelectedOption}
                    isSearchable={false}
                    options={fromOptions}
                  />
                </FormControl>
                <FormControl
                  isInvalid={touched.fromAmount && errors.fromAmount}
                >
                  <FormLabel>
                    {t('cabinet:finance-exchange-give-sum')}{' '}
                    {fromSelectedOption.label}
                  </FormLabel>
                  <Input
                    value={values.fromAmount}
                    onChange={(e) => {
                      if (!Number.isNaN(+e.target.value)) {
                        setFieldValue('toAmount', e.target.value * coefficient);
                      }
                      handleChange('fromAmount')(e);
                    }}
                    onBlur={(e) => {
                      handleBlur('fromAmount')(e);
                    }}
                  />
                  <FormErrorMessage>{errors.fromAmount}</FormErrorMessage>
                </FormControl>
              </VStack>
            </Card>
            <Card p="20px" flexGrow="1">
              <VStack spacing="20px" align="stretch">
                <FormControl>
                  <FormLabel fontSize="xl" fontWeight="bold">
                    {t('cabinet:finance-exchange-got')}
                  </FormLabel>
                  <Select
                    instanceId="toSelect"
                    value={toSelectedOption}
                    onChange={(option) =>
                      onToOptionSelect(
                        option,
                        setFieldValue,
                        validateField,
                        values
                      )
                    }
                    defaultValue={toSelectedOption}
                    isSearchable={false}
                    options={toOptions}
                  />
                </FormControl>
                <FormControl isInvalid={touched.toAmount && errors.toAmount}>
                  <FormLabel>
                    {t('cabinet:finance-exchange-got-sum')}{' '}
                    {toSelectedOption.label}
                  </FormLabel>
                  <Input
                    value={values.toAmount}
                    onChange={(e) => {
                      if (!Number.isNaN(+e.target.value)) {
                        setFieldValue(
                          'fromAmount',
                          e.target.value / coefficient
                        );
                      }
                      handleChange('toAmount')(e);
                    }}
                    onBlur={(e) => {
                      handleBlur('toAmount')(e);
                    }}
                  />
                  <FormErrorMessage>{errors.toAmount}</FormErrorMessage>
                </FormControl>
              </VStack>
            </Card>
          </Stack>
          <Button rounded="xl" w="full" onClick={handleSubmit}>
            <Text fontSize="18px" fontWeight="bold">
              {t('cabinet:finance-exchange-btn')}
            </Text>
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default Exchange;

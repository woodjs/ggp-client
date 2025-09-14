import {
  Card,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { Formik, FastField } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export function CheckoutForm({ onSubmit, isDisabled }) {
  const { t } = useTranslation('orders');

  const CheckoutSchema = Yup.object().shape({
    fullname: Yup.string().required(t('fullname_required')),
    address: Yup.string().required(t('address_required')),
    postalCode: Yup.string()
      .matches(/^\d{5}$/, t('postalCode_invalid'))
      .required(t('postalCode_required')),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, t('phone_invalid'))
      .required(t('phone_required')),
  });

  return (
    <Card p="20px" maxW="400px" w="full" h="auto">
      <Text fontWeight="bold" fontSize="lg" mb="4">
        {t('delivery_info_title')}
      </Text>
      <Text fontSize="sm" mb="2">
        {t('delivery_info_text')}
      </Text>

      <Formik
        initialValues={{
          fullname: '',
          address: '',
          postalCode: '',
          phone: '',
        }}
        validationSchema={CheckoutSchema}
        onSubmit={(values, actions) => {
          if (onSubmit) onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <VStack as="form" spacing={4} onSubmit={handleSubmit}>
            <FastField name="fullname">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('fullname_label')}</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="address">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('address_label')}</FormLabel>
                  <Input {...field} />
                  <FormHelperText>{t('address_helper')}</FormHelperText>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="postalCode">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('postalCode_label')}</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="phone">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>{t('phone_label')}</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <Button
              mt="4"
              colorScheme="blue"
              type="submit"
              isLoading={isSubmitting}
              w="full"
              isDisabled={isDisabled}
            >
              {t('submit_button')}
            </Button>
          </VStack>
        )}
      </Formik>
    </Card>
  );
}

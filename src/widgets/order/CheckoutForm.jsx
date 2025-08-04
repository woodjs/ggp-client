import { Card } from '@/shared/ui';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FastField, Formik } from 'formik';

export function CheckoutForm() {
  return (
    <Card p="20px" maxW="400px" w="full" h="auto">
      <Text fontWeight="bold" fontSize="lg" mb="4">
        Данные для доставки
      </Text>
      <Text fontSize="sm" mb="2">
        Доставка осуществляется строго внутри королевства Таиланд
      </Text>

      <Formik
        initialValues={{
          fullname: '',
          address: '',
          postalCode: '',
          phone: '',
        }}
        // validationSchema={schema}
        // onSubmit={handleClick}
      >
        {({ handleSubmit }) => (
          <VStack>
            <FastField name="fullname">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>ФИО получателя</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>

            <FastField name="address">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>Адрес доставки</FormLabel>
                  <Input {...field} />
                  <FormHelperText>
                    * В случае, если вы еще не прибыли в Таиланд, доставка будет
                    осуществлена в ближайший к вашему адресу пункт выдачи
                    заказов
                  </FormHelperText>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>
            <FastField name="postalCode">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>Почтовый индекс</FormLabel>
                  <Input {...field} />

                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>
            <FastField name="phone">
              {({ field, meta }) => (
                <FormControl isInvalid={!!meta.error && meta.touched}>
                  <FormLabel>Номер телефона</FormLabel>
                  <Input {...field} />

                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </FastField>
            <Button mt="4" colorScheme="blue">
              Подтвердить заказ
            </Button>
          </VStack>
        )}
      </Formik>
    </Card>
  );
}

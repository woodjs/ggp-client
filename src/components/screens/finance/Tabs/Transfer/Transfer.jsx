import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
} from '@chakra-ui/react';

import { AvatarAndLogin } from '@/widgets/profile/ui';
import { CurrencySelect } from '../CurrencySelect';

function TransferForm({ formik, partner, setPartner, currency, setCurrency }) {
  const { t } = useTranslation('finance');

  return (
    <Card p="30px">
      <Stack spacing={6}>
        <Box>
          <FormLabel fontWeight="bold">{t('select-wallet')}</FormLabel>
          <CurrencySelect currency={currency} setCurrency={setCurrency} />
        </Box>
        <FormControl isInvalid={formik.touched.login && !!formik.errors.login}>
          <FormLabel fontWeight="bold">{t('login')}</FormLabel>
          <Input
            name="login"
            onChange={(e) => {
              formik.handleChange(e);
              setPartner(e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          <FormErrorMessage>{t(formik.errors.login)}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.amount && !!formik.errors.amount}
        >
          <FormLabel fontWeight="bold">{t('amount')}</FormLabel>

          <NumberInput min={10} value={formik.values.amount}>
            <NumberInputField
              name="amount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </NumberInput>
          <FormErrorMessage>{t(formik.errors.amount)}</FormErrorMessage>
        </FormControl>

        <Box>
          <FormLabel fontWeight="bold">{t('receiver')}</FormLabel>
          <AvatarAndLogin login={partner} />
        </Box>

        <Button onClick={formik.handleSubmit}>{t('btn-send')}</Button>
      </Stack>
    </Card>
  );
}

export default TransferForm;

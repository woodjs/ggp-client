import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { ModalConfirm2FA } from '@/widgets/security/ModalConfirm2FA';
import { useProfile } from '@/entities/profile';
import { useTransfer } from '@/hooks/user/useBalance';
import TransferForm from './Transfer';

const validationSchema = yup.object().shape({
  login: yup.string().required('errors:input-required'),
  amount: yup
    .number('errors:only-number')
    .min(1, 'errors:amount-negative')
    .required('errors:input-required'),
});

export default function TranfserFormContainer() {
  const { data: profile } = useProfile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partner, setPartner] = useState(null);
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState('USDT');

  const { mutateAsync } = useTransfer();
  const formik = useFormik({
    initialValues: {
      login: '',
      amount: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (!partner) {
        formik.setFieldError('login', 'user-not-found');
        return false;
      }
      if (partner.login === profile.login) {
        formik.setFieldError('login', 'forbidden-self-transfer');
        return false;
      }

      // if (values)

      setData({
        ...values,
        amount: Number(values.amount),
        currencyCode: currency,
      });
      onOpen();

      return true;
    },
  });

  const handleConfirm = async (codes) =>
    mutateAsync(
      { ...data, codes },
      {
        onSuccess: () => {
          onClose();
          setPartner(null);
        },
        onError: ({ status }) => {
          if (status === 403) {
            onClose();
            setPartner(null);
          }
        },
        onSettled: () => {
          formik.resetForm();
        },
      }
    );

  return (
    <>
      <TransferForm
        formik={formik}
        partner={partner}
        setPartner={setPartner}
        currency={currency}
        setCurrency={setCurrency}
      />
      <ModalConfirm2FA
        isOpen={isOpen}
        onClose={onClose}
        action="transfer-money"
        onConfirm={handleConfirm}
      />
    </>
  );
}

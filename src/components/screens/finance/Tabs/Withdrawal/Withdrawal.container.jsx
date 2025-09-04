import { useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import { useWithdraw, useBalance } from '@/hooks/user/useBalance';
import { useRequisite } from '@/hooks/user/useRequisite';

import { ModalConfirm2FA } from '@/widgets/security/ModalConfirm2FA';

import WithdrawalForm from './Withdrawal';

const validationSchema = yup.object().shape({
  requisiteId: yup.string().required('errors:input-required'),
  amount: yup
    .number('errors:only-number')
    .positive('errors:amount-negative')
    .min(20, 'errors:amount-negative')
    .required('errors:input-required'),
});

const defaultCommission = 1;

export default function WithdrawalFormContainer() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState('USDT');
  const [serverData, setServerData] = useState(null);

  const { mutateAsync } = useWithdraw();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      amount: '',
      requisiteId: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setServerData({
        requisiteId: +values.requisiteId,
        currencyCode: currency,
        amount: +values.amount,
      });
      onOpen();
    },
  });
  const { getAll } = useRequisite();
  const requisites = getAll();

  const { data: balance } = useBalance();

  const handleAmountChange = (value) => {
    const amount = Number(value);

    if (amount < 0) return false;
    if (!amount) return setTotalAmount(0);
    const commission = (amount * defaultCommission) / 100;

    return setTotalAmount(amount + commission);
  };
  const handleConfirm = async (codes) =>
    mutateAsync(
      { codes, ...serverData },
      {
        onSuccess: () => {
          onClose();
          setTotalAmount(0);
          formik.resetForm();
        },
        onError: ({ status }) => {
          if (status === 403) {
            onClose();
            setTotalAmount(0);
            formik.resetForm();
          }
        },
      }
    );

  if (requisites.isLoading) return null;

  // const handleMaxClick = () => {
  //   formik.setFieldValue('amount', balance.usd);
  //   handleAmountChange(balance.usd);
  // };

  return (
    <>
      <WithdrawalForm
        formik={formik}
        balance={balance.usd}
        requisites={requisites.data}
        totalAmount={totalAmount}
        handleAmountChange={handleAmountChange}
        // handleMaxClick={handleMaxClick}
        currency={currency}
        setCurrency={setCurrency}
        defaultCommission={defaultCommission}
      />
      <ModalConfirm2FA
        isOpen={isOpen}
        onClose={onClose}
        action="withdrawal-money"
        onConfirm={handleConfirm}
      />
    </>
  );
}

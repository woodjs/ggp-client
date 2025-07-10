import { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useProfile } from '@/entities/profile';
import { TransferModalNFT } from './Modal';


const validationSchema = yup.object().shape({
  login: yup.string().required('errors:input-required'),
});

function TransferNFTButton({ id, name, image, isDisabled }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partner, setPartner] = useState(null);
  const { data: profile } = useProfile();
  const { t } = useTranslation('myfarm');

  const formik = useFormik({
    initialValues: {
      login: '',
    },
    validationSchema,
    onSubmit: () => {
      if (!partner) {
        formik.setFieldError('login', 'user-not-found');
        return false;
      }
      if (partner.login === profile.login) {
        formik.setFieldError('login', 'forbidden-self-transfer');
        return false;
      }

      onOpen();

      return true;
    },
  });

  return (
    <>
      <TransferModalNFT
        isOpen={isOpen}
        onClose={onClose}
        id={id}
        name={name}
        image={image}
        formik={formik}
        partner={partner}
        setPartner={setPartner}
      />

      <Button w="full" onClick={onOpen} isDisabled={isDisabled}>
        {t('transfer-btn')}
      </Button>
    </>
  );
}

export default TransferNFTButton;

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { usePassword } from '@/entities/profile';
import { ModalConfirm2FA } from '@/widgets/security/ModalConfirm2FA';

import ProfilePasswordForm from './ProfilePasswordForm';

const formSchema = Yup.object().shape({
  password: Yup.string().min(6, 'errors:password-min-length'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'errors:password-not-equal'
  ),
});

function ProfilePasswordFormContainer() {
  const { t } = useTranslation('profile');
  const { mutateAsync } = usePassword();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});

  const formik = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema: formSchema,
    onSubmit: (values) => {
      if (!values.password.length) return;

      setData(values);
      onOpen();
    },
  });

  const isDisabled =
    Object.keys(formik.errors).length > 0 ||
    (formik.values.password.length === 0 &&
      formik.values.confirmPassword.length === 0);

  const { resetForm } = formik;

  const onConfirm = (codes) =>
    mutateAsync(
      { ...data, codes },
      {
        onSuccess: () => {
          resetForm();
          onClose();
        },
      }
    );

  return (
    <>
      <ProfilePasswordForm formik={formik} t={t} isDisabled={isDisabled} />

      <ModalConfirm2FA
        title={t('password-modal-title')}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onClose={onClose}
        action="change-password"
      />
    </>
  );
}

export default ProfilePasswordFormContainer;

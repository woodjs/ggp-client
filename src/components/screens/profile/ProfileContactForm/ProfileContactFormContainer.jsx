import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { useSocial, useSocialUpdate } from '@/hooks/user/useSocial';

import ProfileContactForm from './ProfileContactForm';

function ProfileContactFormContainer() {
  const [initial, setInitial] = useState({});
  const { data, isLoading } = useSocial();
  const { mutate } = useSocialUpdate();

  const formik = useFormik({
    initialValues: {
      fb: '',
      tg: '',
      inst: '',
      website: '',
      chat: '',
    },
    onSubmit: (values) => {
      if (JSON.stringify(initial) === JSON.stringify(values)) return false;

      const result = Object.keys(values).reduce((acc, key) => {
        if (values[key] !== initial[key]) {
          acc[key] = values[key] || null;
        }
        return acc;
      }, {});

      mutate(result, {
        onSuccess: () => {
          setInitial(values);
        },
      });

      return true;
    },
  });

  useEffect(() => {
    if (data) {
      // Если ключи data null заменить на ''
      const dataWithEmptyString = Object.keys(data).reduce((acc, key) => {
        acc[key] = data[key] || '';
        return acc;
      }, {});
      formik.setValues(dataWithEmptyString);
      setInitial(dataWithEmptyString);
    }
  }, [data]);

  if (isLoading) return null;

  return (
    <ProfileContactForm
      formik={formik}
      isDisabled={JSON.stringify(initial) === JSON.stringify(formik.values)}
    />
  );
}

export default ProfileContactFormContainer;

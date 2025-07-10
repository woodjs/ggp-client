import { useState } from 'react';

export const useForm2FA = () => {
  const [codes, setCodes] = useState({});

  const onChange = (e) => {
    if (!e.target.value.length)
      return setCodes({ ...codes, [e.target.name]: '' });
    return setCodes({ ...codes, [e.target.name]: Number(e.target.value) });
  };

  const isValidateForm = () => {
    if (!Object.keys(codes).length) return false;

    return Object.values(codes).every((value) => !!value);
  };

  return {
    codes,
    onChange,
    isValidateForm,
  };
};

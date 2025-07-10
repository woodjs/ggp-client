import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  login: yup.string().required('errors:input-required'),
  password: yup
    .string()
    .min(6, 'errors:password-min-length')
    .max(32, 'errors:password-max-length')
    .required('errors:input-required'),
});

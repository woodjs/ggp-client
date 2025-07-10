import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  login: yup
    .string()
    .required('errors:input-required')
    .matches(/^[^\sа-яА-ЯЁё]+$/, 'errors:cyrillic-and-space'),
  email: yup
    .string()
    .email('errors:email-invalid')
    .required('errors:input-required'),
  password: yup
    .string()
    .min(6, 'errors:password-min-length')
    .max(32, 'errors:password-max-length')
    .required('errors:input-required'),
});

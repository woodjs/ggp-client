import * as yup from 'yup';

export const validateSchema = yup.object({
  password: yup.string().required('errors:input-required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'auth:invalid-password-equal')
    .required('errors:input-required'),
});

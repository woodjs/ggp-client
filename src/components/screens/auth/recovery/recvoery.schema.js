import * as yup from 'yup';

export const recoverySchema = yup.object().shape({
  email: yup
    .string()
    .email('errors:email-invalid')
    .required('errors:input-required'),
});

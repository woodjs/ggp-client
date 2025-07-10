import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required('errors:input-required'),
  email: yup
    .string()
    .email('errors:email-invalid')
    .required('errors:input-required'),
});

export default schema;

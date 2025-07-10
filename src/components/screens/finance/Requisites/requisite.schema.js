import * as yup from 'yup';

export const requisiteSchema = yup.object().shape({
  requisiteId: yup.string().required('errors:input-required'),
  categoryId: yup.string().required('errors:input-required'),
  value: yup.string().required('errors:input-required'),
});

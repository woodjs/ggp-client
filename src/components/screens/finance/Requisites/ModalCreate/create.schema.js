import * as yup from 'yup';

export const createRequisiteSchema = yup.object().shape({
  typeId: yup.string().required('Это поле обязательно для заполнения'),
  categoryId: yup.string().required('Это поле обязательно для заполнения'),
  value: yup.string().required('Это поле обязательно для заполнения'),
});

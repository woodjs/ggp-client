import * as yup from 'yup';

export const mainInfo = yup.object().shape({
  email: yup.string().email('Некорректный email').required('Заполните поле'),
  emailCheckbox: yup.boolean(),
  loginCheckbox: yup.boolean(),
});

import * as yup from 'yup';

export const getExchangeSchema = ({ min = 1 }) =>
  yup.object().shape({
    fromAmount: yup

      .number('Введите число')
      .required('Заполните поле')
      .min(min, `Минимальная сумма пополнения ${min}`),
    toAmount: yup.number('Введите число').required('Заполните поле'),
  });

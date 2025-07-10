import * as yup from 'yup';

function formatNumber(value, locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
  }).format(value);
}

export const getInputAmountFormSchema = (min = 1) =>
  yup.object().shape({
    amount: yup
      .number('errors:only-number')
      // .integer('errors:only-integer')
      .required('errors:input-required')
      .min(min, `Минимальная сумма пополнения ${min}`),
    // .max(max, `Максимальная сумма пополнения ${formatNumber(max)}`),
  });

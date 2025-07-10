export default function formatCurrency(
  value,
  currency = 'USD',
  locale = 'en-US'
) {
  // if (!value) return 0;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

export default function formatNumber(value, locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
  }).format(value);
}

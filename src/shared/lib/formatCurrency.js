export const formatCurrency = ({ amount, currency }) => {
  const formattedAmount = amount.toLocaleString();

  if (currency) return `${currency}${formattedAmount}`;

  return formattedAmount;
};

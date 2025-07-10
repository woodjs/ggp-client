const cycles = 12;
export const minPrice = 50;

export function getIncomeForCycle(amount, percent) {
  if (amount < minPrice) return 0;
  return Number(((amount * percent) / cycles).toFixed(2));
}

export function getPercentByAmount(amount) {
  if (amount < 50) return 0;
  if (amount >= 50 && amount <= 200) return 0.24;
  if (amount <= 600) return 0.26;
  if (amount <= 1001) return 0.3;
  if (amount <= 3000) return 0.35;
  if (amount <= 6000) return 0.4;
  if (amount <= 12000) return 0.45;
  if (amount <= 20000) return 0.5;
  if (amount <= 40000) return 0.6;
  if (amount <= 80000) return 0.65;
  if (amount <= 100000) return 0.68;
  return 0.72;
}

export function getIncomeForYear(amount, reinvest) {
  if (amount < minPrice) return 0;

  let totalCycles = cycles;
  let totalIncome = 0;
  let currentAmount = amount;

  do {
    const percent = getPercentByAmount(currentAmount);
    const incomeForCycle = getIncomeForCycle(currentAmount, percent);

    totalIncome += incomeForCycle;
    currentAmount += reinvest ? incomeForCycle : 0;
    // eslint-disable-next-line no-plusplus
  } while (--totalCycles > 0);

  return Number(totalIncome.toFixed(2));
}

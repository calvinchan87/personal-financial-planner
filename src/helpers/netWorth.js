const netWorthObj = [
  {
    assets: 300000,
    debt: 100000
  }
];

export function netWorth() {
  const assets = netWorthObj[0].assets
  const debt = netWorthObj[0].debt
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  return formatter.format(assets - debt);
}
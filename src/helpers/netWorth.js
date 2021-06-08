const netWorthObj = [
  {
    assets: 300000,
    debt: 100000
  }
];

// export function netWorth() {
//   let netWorth = netWorthObj.assets
//   return netWorth;
// }

const netWorth = function() {
  let netWorthArray = [];

  for(const data of netWorthObj) {
    netWorthArray.push(data.assets)
    netWorthArray.push(data.debt)
  }
  let result = 0
  for (let x = 0; x < netWorthArray.length; x++) {
    if (netWorthArray[0]) {
      result += netWorthArray[0]
    }
  }
  return result
}

console.log(netWorth())
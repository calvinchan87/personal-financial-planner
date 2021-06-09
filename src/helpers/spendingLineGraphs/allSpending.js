const foodObj = [
  {
  date: "January",
  amount: 500
  },
  {
    date: "February",
    amount: 450
  },
  {
    date: "March",
    amount: 550
  },
]

const shelterObj = [
  {
  date: "January",
  amount: 2000
  },
  {
  date: "February",
  amount: 2000
  },
  {
  date: "March",
  amount: 2000
  },
]

const householdObj = [
  {
  date: "January",
  amount: 2600
  },
  {
  date: "February",
  amount: 3000
  },
  {
  date: "March",
  amount: 800
  },
]

export function dates() {
  let datesArray = [];
  for(const data of foodObj) {
    datesArray.push(data.date)
  }
  return datesArray;
}

export function foodSpending() {
  let foodSpendArray = [];
  for(const data of foodObj) {
    foodSpendArray.push(data.amount)
  }
  return foodSpendArray;
}
export function shelterSpending() {
  let shelterSpendArray = [];
  for(const data of shelterObj) {
    shelterSpendArray.push(data.amount)
  }
  return shelterSpendArray;
}

export function householdSpending() {
  let householdSpendArray = [];
  for(const data of householdObj) {
    householdSpendArray.push(data.amount)
  }
  return householdSpendArray;
}




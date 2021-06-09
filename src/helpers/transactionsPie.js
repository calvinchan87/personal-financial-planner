const transactionObj = [
  { 
    id: 1,
    date: 'April 1, 2021',
    description: "Rent",
    category: "shelter",
    amount: 1800
  },
  { 
    id: 1,
    date: 'April 2, 2021',
    description: "Gas",
    category: "transportation",
    amount: 50
  },
  { 
    id: 1,
    date: 'May 3, 2021',
    description: "Safeway",
    category: "food",
    amount: 150
  },
  { 
    id: 1,
    date: 'May 4, 2021',
    description: "Whole Foods",
    category: "household",
    amount: 175
  },
  { 
    id: 1,
    date: 'June 5, 2021',
    description: "Superstore",
    category: "food",
    amount: 87
  },
  { 
    id: 1,
    date: 'June 6, 2021',
    description: "Bed Bath & Beyond",
    category: "household",
    amount: 345
  },
  { 
    id: 1,
    date: 'June 4, 2021',
    description: "Utilities",
    category: "shelter",
    amount: 75
  },
  { 
    id: 1,
    date: 'June 1, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 44
  },
  { 
    id: 1,
    date: 'June 1, 2020',
    description: "Gas",
    category: "transportation",
    amount: 60
  },
  { 
    id: 1,
    date: 'June 2, 2020',
    description: "Costco",
    category: "food",
    amount: 235
  },
  { 
    id: 1,
    date: 'June 3, 2020',
    description: "Whole Foods",
    category: "food",
    amount: 57
  },
]

export function Rows() {
  let tranArray = [];
  for(const obj of transactionObj) {
    tranArray.push(obj)
  }
  return tranArray;
};

export function Categories() {
  let categoryArray = [];
  for(const obj of transactionObj) {
    if(!categoryArray.includes(obj.category)) {
      categoryArray.push(obj.category)
    }
  }
  return categoryArray;
};

export function Amounts() {
  let amountArray = [];
  for(const obj of transactionObj) {
    amountArray.push(obj.amount)
  }
  return amountArray;
};

export function Filter(obj, filterString) {
  return obj.filter(function(e) {
    return e.date.includes(filterString)
  })
};
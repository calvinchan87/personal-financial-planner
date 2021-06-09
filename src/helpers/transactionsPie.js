const transactionObj = [
  { 
    id: 1,
    date: 'April 1, 2021',
    description: "Whole Foods",
    category: "shelter",
    amount: 100
  },
  { 
    id: 1,
    date: 'April 2, 2021',
    description: "Gas",
    category: "transportation",
    amount: 100
  },
  { 
    id: 1,
    date: 'May 3, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 100
  },
  { 
    id: 1,
    date: 'May 4, 2021',
    description: "Whole Foods",
    category: "household",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 5, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 6, 2021',
    description: "Bed Bath & Beyond",
    category: "household",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 4, 2021',
    description: "Whole Foods",
    category: "shelter",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 1, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 1, 2021',
    description: "Whole Foods",
    category: "transportation",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 2, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 100
  },
  { 
    id: 1,
    date: 'June 3, 2021',
    description: "Whole Foods",
    category: "food",
    amount: 100
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
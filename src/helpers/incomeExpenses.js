const incExpObj = [
  {
    year: 2016,
    income: 40000,
    expenses: 34000
  },
  {
    year: 2017,
    income: 41400,
    expenses: 37000
  }, 
  {
    year: 2018,
    income: 45000,
    expenses: 40000
  },
  {
    year: 2019,
    income: 46500,
    expenses: 39500
  },
  {
    year: 2020,
    income: 50000,
    expenses: 42500
  }
];

export function yearArray() {
  let year = [];
  for(const data of incExpObj) {
    year.push(data.year);
  }
  return year
};

export function incomeArray() {
  let inc = [];
  for(const data of incExpObj) {
    inc.push(data.income);
  }
  return inc
}

export function expensesArray() {
  let exp = [];
  for(const data of incExpObj) {
    exp.push(data.expenses)
  }
  return exp
}
 const incExpObj = [
    {
      month: 'Jan-21',income: 5000,expenses: 2845.65
    },
    {
      month: 'Feb-21',income: 5000,expenses: 3117.05
    },
    {
      month: 'Mar-21',income: 5000,expenses: 2597.15
    },
    {
      month: 'Apr-21',income: 5000,expenses: 3118.75
    },
    {
      month: 'May-21',income: 5000,expenses: 3769.50
    }
  ];
  
  export function monthArray() {
    let month = [];
    for(const data of incExpObj) {
      month.push(data.month);
    }
    return month
  };
  
  export function incomeArray() {
    let inc = [];
    for(const data of incExpObj) {
      inc.push(data.income);
    }
    return inc
  };
  
  export function expensesArray() {
    let exp = [];
    for(const data of incExpObj) {
      exp.push(data.expenses)
    }
    return exp
  };
  

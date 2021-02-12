'use strict';

let money;

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
const start = () => {
  appData.budget = prompt('Ваш месячный доход?');

  while (!isNumber(appData.budget)) {
    appData.budget = prompt('Ваш месячный доход?');
  }
};

let appData = {
  budget: money,
  income: {},
  mission: 200000,
  period: 3,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  addExpenses: [],
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  expenses: {},
  getExpensesMonth: () => {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: () => {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: () => appData.mission / appData.budgetMonth

  // if (result > 0) {
  //   console.log('Цель будет достигнута');
  // } else if (result < 0) {
  //   console.log('Цель не будет достигнута');
  // }
  // return result;
  ,
  getStatusIncome: param => {
    if (param > 1200) {
      return ('У вас высокий уровень дохода');
    } else if (param > 600 && param < 1200) {
      return ('У вас средний уровень дохода');
    } else if (param < 600 && param > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (param > -1) {
      return ('Что то пошло не так');
    }
  },
  asking: () => {

    if (confirm('Если ли у вас дополнительный источник заработка?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {

      let itemExpenses = prompt('Введите обязательную статью расходов?')
      let cashExpenses;
      do {
        cashExpenses = prompt('Во сколько это обойдется?');
      } 
      while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

      appData.expenses[itemExpenses] = cashExpenses;
    }
  },
  getInfoDeposit: () => {
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?', '10');
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    }
  },
  calcSavedMoney: () => appData.budgetMonth * appData.period
};

start();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome(appData.budgetDay);

const abc = () => {
  console.log('Наша программа включает в себя данные: ');
  for (let key in appData) {
    console.log(`
    Свойства: ${key}
    Значение: ${appData[key]}
  `);
  }
}
abc();
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Сколько месяцев осталось до цели:', appData.getTargetMonth());

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
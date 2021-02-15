'use strict';

let money;
const controlButton = document.getElementById('start');
const incomeAddButton = document.getElementsByTagName('button')[0];
const expensesAddButton = document.getElementsByTagName('button')[1];
const depositCheckBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('budget_month-value');
const budgetDayValue = document.getElementsByClassName('budget_day-value');
const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
const incomePeriodValue = document.getElementsByClassName('income_period-value');
const targetMonthValue = document.getElementsByClassName('target_month-value');
const salaryMonth = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-items > .income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-items > .expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheckMark = document.querySelector('#deposit-check');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const cancelButton = document.querySelector('#cancel');


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
  getTargetMonth: () => appData.mission / appData.budgetMonth,
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
      let itemIncome;
      let cashIncome;

      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      }
      while (!isNaN(itemIncome) || itemIncome !== itemIncome.trim() || itemIncome === null || itemIncome === '');

      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 15000);
      }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null || cashIncome !== cashIncome.trim());

      appData.income[itemIncome] = cashIncome;
    };

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
    appData.addExpenses = addExpenses.split(',').map(item =>
      item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase()
    );
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let itemExpenses;
      let cashExpenses;

      do {
        itemExpenses = prompt('Введите обязательную статью расходов?');
      }
      while (!isNaN(itemExpenses) || itemExpenses !== itemExpenses.trim() || itemExpenses === null || itemExpenses === '');

      do {
        cashExpenses = prompt('Во сколько это обойдется?');
      }
      while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null || cashExpenses !== cashExpenses.trim());

      appData.expenses[itemExpenses] = cashExpenses;
    }
  },
  getInfoDeposit: () => {
    if (appData.deposit) {

      do {
        appData.percentDeposit = prompt('Какой годовой процент?', 10);
      }
      while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null || appData.percentDeposit !== appData.percentDeposit.trim());

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 12000);
      }
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit !== appData.moneyDeposit.trim() || appData.moneyDeposit === null || appData.moneyDeposit === '');
    }
  },
  calcSavedMoney: () => appData.budgetMonth * appData.period
};

start();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome(appData.budgetDay);

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Сколько месяцев осталось до цели:', appData.getTargetMonth());
console.log(appData.addExpenses.join(', '));
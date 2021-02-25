'use strict';

const controlButton = document.getElementById('start');
const incomeAddButton = document.getElementsByTagName('button')[0];
const expensesAddButton = document.getElementsByTagName('button')[1];
const depositCheckBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-items > .income-title');
let incomeItems = document.querySelectorAll('.income-items');
const expensesTitle = document.querySelector('.expenses-items > .expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheckMark = document.querySelector('#deposit-check');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const cashExpenses = document.querySelector('.expenses-amount');
const cashIncome = document.querySelector('.income-amount');
const cancelButton = document.querySelector('#cancel');

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

let appData = {
  budget: 0,
  targetAmount: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expensesMonth: 0,
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {
    appData.getExpenses();
    appData.getIncome();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
    controlButton.style.display = 'none';
    cancelButton.style.display = 'block';
  },
  reset: function () {
    if (cancelButton.style.display === 'block') {
      window.location.href = 'index.html';
    }
  },
  showResult: function () {
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    budgetMonthValue.value = appData.budgetMonth;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();
  },
  incomePeriod: function () {
    incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
  },
  periodAmount: function () {
    periodAmount.innerHTML = periodSelect.value;
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddButton);
    expensesItems = document.querySelectorAll('.expenses-items');

    expensesTitle.value = '';
    cashExpenses.value = '';
    
    if (expensesItems.length === 3) {
      expensesAddButton.style.display = 'none';
    }

  },
  addIncomeBlock: function () {
    let cloneIncomesItem = incomeItems[0].cloneNode(true);

    incomeItems[0].parentNode.insertBefore(cloneIncomesItem, incomeAddButton);
    incomeItems = document.querySelectorAll('.income-items');

    incomeTitle.value = '';
    cashIncome.value = '';

    if (incomeItems.length === 3) {
      incomeAddButton.style.display = 'none';
    }
  },
  getExpenses: function () {
    expensesItems.forEach(() => {
      if (expensesTitle.value !== '' && cashExpenses.value !== '') {
        appData.expenses[expensesTitle.value] = +cashExpenses.value;
      }
    })

    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getIncome: function () {
    incomeItems.forEach(() => {
      if (incomeTitle.value !== '' && cashIncome.value !== '') {
        appData.income[incomeTitle.value] = +cashIncome.value;
      }
    })

    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getBudget: function () {
    if (salaryAmount.value === '') {
      alert('Ошибка, строка пустая. Заполните месячный доход.');
      return;
    }

    appData.budget = +salaryAmount.value;
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    if (targetAmount.value === '') {
      return targetMonthValue.value = targetAmount.value;
    } else {
      return targetAmount.value / appData.budgetMonth;
    }
  },
  getStatusIncome: function (param) {
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
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach(item => {
      item = item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim().charAt(0).toUpperCase() + item.value.trim().substr(1).toLowerCase();

      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    })
  },
  getInfoDeposit: function () {
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
  calcSavedMoney: function () {
    return appData.budgetMonth * periodSelect.value
  }
};

controlButton.addEventListener('click', appData.start);
expensesAddButton.addEventListener('click', appData.addExpensesBlock);
incomeAddButton.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.periodAmount);
periodSelect.addEventListener('input', appData.incomePeriod);
cancelButton.addEventListener('click', appData.reset);
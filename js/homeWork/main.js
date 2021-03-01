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
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheckMark = document.querySelector('#deposit-check');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const cancelButton = document.querySelector('#cancel');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

class AppData {

  constructor() {
    this.budget = 0;
    this.targetAmount = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  eventListeners() {
    const _this = this;
    controlButton.addEventListener('click', function () {
      _this.start();
    });
    expensesAddButton.addEventListener('click', this.addExpensesBlock);
    incomeAddButton.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.periodAmount);
    periodSelect.addEventListener('input', this.incomePeriod);
    cancelButton.addEventListener('click', function () {
      _this.reset();
    });
  };

  check() {
    if (salaryAmount !== '') {
      start.removeAttribute('disabled');
    }
  };

  start() {
    document.querySelectorAll('input[type=text]').forEach(item => {
      item.disabled = true;
    });

    this.getExpenses();
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();

    controlButton.style.display = 'none';
    cancelButton.style.display = 'block';
  };

  showResult() {
    budgetDayValue.value = Math.ceil(this.budgetDay);
    budgetMonthValue.value = this.budgetMonth;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
  };

  incomePeriod() {
    incomePeriodValue.value = budgetMonthValue.value * periodSelect.value;
  };

  periodAmount() {
    periodAmount.innerHTML = periodSelect.value;
  };

  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddButton);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesAddButton.style.display = 'none';
    }
  };

  addIncomeBlock() {
    let cloneIncomesItem = incomeItems[0].cloneNode(true);

    incomeItems[0].parentNode.insertBefore(cloneIncomesItem, incomeAddButton);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomeAddButton.style.display = 'none';
    }
  };

  getExpenses() {
    const _this = this;

    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach(item => {
      const nameInput = item.querySelector('.expenses-title');
      const numInput = item.querySelector('.expenses-amount');
      _this.expenses[nameInput.value] = +numInput.value;
    })

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  };

  getIncome() {
    const _this = this;

    incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach(item => {
      const nameInput = item.querySelector('.income-title');
      const numInput = item.querySelector('.income-amount');
      _this.income[nameInput.value] = +numInput.value;
    })

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  };

  getBudget() {

    if (salaryAmount.value === '') {
      alert('Ошибка, строка пустая. Заполните месячный доход.');
      return;
    }

    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  };

  getTargetMonth() {
    if (targetAmount.value === '') {
      return targetMonthValue.value = targetAmount.value;
    } else {
      return targetAmount.value / this.budgetMonth;
    }
  };

  getStatusIncome(param) {
    if (param > 1200) {
      return ('У вас высокий уровень дохода');
    } else if (param > 600 && param < 1200) {
      return ('У вас средний уровень дохода');
    } else if (param < 600 && param > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (param > -1) {
      return ('Что то пошло не так');
    }
  };

  getAddExpenses() {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach(item => {
      item = item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    })
  };

  getAddIncome() {
    const _this = this;
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim().charAt(0).toUpperCase() + item.value.trim().substr(1).toLowerCase();

      if (itemValue !== '') {
        _this.addIncome.push(itemValue);
      }
    })
  };

  getInfoDeposit() {
    const _this = this;
    if (this.deposit) {

      do {
        _this.percentDeposit = prompt('Какой годовой процент?', 10);
      }
      while (isNaN(_this.percentDeposit) || _this.percentDeposit === '' || _this.percentDeposit === null || _this.percentDeposit !== _this.percentDeposit.trim());

      do {
        _this.moneyDeposit = prompt('Какая сумма заложена?', 12000);
      }
      while (isNaN(_this.moneyDeposit) || _this.moneyDeposit !== _this.moneyDeposit.trim() || _this.moneyDeposit === null || _this.moneyDeposit === '');
    }
  };

  calcSavedMoney() {

    return budgetMonthValue.value * periodSelect.value;
  };

  reset() {
    this.budget = 0;
    this.targetAmount = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {
    };
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {
    };
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    expensesItems = document.querySelectorAll('.expenses-items');
    incomeItems = document.querySelectorAll('.income-items');

    incomeItems.forEach((item, index) => {
      if (index > 0) {
        item.remove();
      }
    });

    expensesItems.forEach((item, index) => {
      if (index > 0) {
        item.remove();
      }
    })

    incomeAddButton.style.display = 'block';
    expensesAddButton.style.display = 'block';

    document.querySelectorAll('input[type=text]').forEach(item => {
      item.value = '';
      item.disabled = false;
    });

    controlButton.style.display = 'block';
    cancelButton.style.display = 'none';
  };
};









const appData = new AppData();
console.log('appData: ', appData);

appData.eventListeners();
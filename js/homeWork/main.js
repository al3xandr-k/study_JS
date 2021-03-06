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
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const cancelButton = document.querySelector('#cancel');
const depositCheck = document.querySelector('#deposit-check');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');

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
    controlButton.addEventListener('click', () => {
      if (salaryAmount.value === '') {
        alert('Ошибка, строка пустая. Заполните месячный доход.');
        return;
      } else if (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null || typeof this.percentDeposit === 'string' || typeof depositPercent.value !== 'string' || isNaN(depositPercent.value)) {
        alert("Введите корректное значение в поле проценты. Вы ввели текст.");
        return;
      } else if (depositPercent.value < 0 || depositPercent.value > 100) {
        alert("Введите корректное значение в поле проценты.");
        return;
      }
      this.start();
    });

    expensesAddButton.addEventListener('click', this.addExpensesBlock);
    incomeAddButton.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.periodAmount);
    periodSelect.addEventListener('input', this.incomePeriod);
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
    cancelButton.addEventListener('click', this.reset.bind(this));
  };

  changePercent() {
    const valueSelect = this.value;

    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
    } else {
      depositPercent.value = valueSelect;
      depositPercent.style.display = 'none';
      depositPercent.value = '';
    }
  };

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
      depositPercent.style.display = 'none';
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      depositPercent.value = '';

      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
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

    this.getExpInc();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
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
    const cloneExpensesItem = expensesItems[0].cloneNode(true);

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddButton);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesAddButton.style.display = 'none';
    }
  };

  addIncomeBlock() {
    const cloneIncomesItem = incomeItems[0].cloneNode(true);

    incomeItems[0].parentNode.insertBefore(cloneIncomesItem, incomeAddButton);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomeAddButton.style.display = 'none';
    }
  };

  getExpInc() {
    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      this[startStr][itemTitle] = +itemAmount;
    };

    expensesItems.forEach(count);
    incomeItems.forEach(count);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    };

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  };

  getBudget() {
    let monthDeposit;
    const valueSelect = this.value;

    if (valueSelect === 'other') {
      monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    } else if (depositBank.value) {
      monthDeposit = valueSelect * (this.moneyDeposit / 100);
    }

    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
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
    const addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach(item => {
      item = item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    })
  };

  getAddIncome() {
    additionalIncomeItem.forEach(item => {
      item = item.value.trim().slice(0, 1).toUpperCase() + item.value.trim().slice(1).toLowerCase();

      if (item !== '') {
        this.addIncome.push(item);
      }
    })
  };

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
      this.value = depositBank.value;
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
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
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

    periodSelect.value = 1;
    periodAmount.innerHTML = '1';

    depositCheck.checked = false;
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPercent.style.display = 'none';
    depositBank.value = '';
    depositAmount.value = '';
    depositPercent.value = '';

    controlButton.style.display = 'block';
    cancelButton.style.display = 'none';
  };
};

const appData = new AppData();

appData.eventListeners();
'use strict';

let money;
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке? Да / нет');
let resultArr;

let appData = {
  budget: money,
  mission: 200000,
  period: 6,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  expenses: {},
  getExpensesMonth: () => {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: () => (money - appData.expensesMonth),
  getTargetMonth: () => {
    let result = (appData.mission - (appData.period * appData.getBudget())) / appData.getBudget();

    if (result > 0) {
      console.log('Цель будет достигнута');
    } else if (result < 0) {
      console.log('Цель не будет достигнута');
    }
    return result;
  },
  getStatusIncome: param => {
    if (param > 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (param > 600 && param < 1200) {
      console.log('У вас средний уровень дохода');
    } else if (param < 600 && param > 0) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (param > -1) {
      console.log('Что то пошло не так');
    }
  },
  asking: () => {
    for (let i = 0; i < 2; i++) {
      appData.expenses[prompt('Введите обязательную статью расходов?')] = +prompt('Во сколько это обойдется?');
    }
    return;
  },

};

appData.asking();

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
const start = () => {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }
};

const expensesMonth = appData.getExpensesMonth();
const accumulatedMonth = appData.getBudget();
const targetMonth = appData.getTargetMonth();
const statusIncome = appData.getStatusIncome();

start();

resultArr = addExpenses.toLocaleLowerCase().split(', ');
appData.budgetDay = (appData.getBudget() / 30);
appData.getStatusIncome(appData.budgetDay);

console.log(resultArr);
console.log('budgetDay: ', Math.floor(appData.budgetDay));
console.log('Сколько месяцев осталось до цели:', appData.getTargetMonth());

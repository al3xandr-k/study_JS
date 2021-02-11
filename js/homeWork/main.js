'use strict';

let money;
let income = 'фриланс';
let mission = 200000;
let period = 6;
let budgetDay;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке? Да / нет');
let resultArr;
let expensesAmount;

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  expenses: {},
  getExpensesMonth: () => {
    let sum = 0;
    for (let key in appData.expenses) {
      console.log('getExpensesMonth-Result: ', sum += appData.expenses[key]);
    }
    return sum;
  },
  getBudget: () => (money - expensesAmount),
  getTargetMonth: () => {
    let result = (mission - (period * appData.getBudget())) / appData.getBudget();

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
console.log('appData expensesMonth: ', appData.expensesMonth);
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
expensesAmount = expensesMonth;
budgetDay = (appData.getBudget() / 30);

appData.getStatusIncome(budgetDay);

console.log(resultArr);
console.log('budgetDay: ', Math.floor(budgetDay));
console.log('Сколько месяцев осталось до цели:', appData.getTargetMonth());
'use strict';

let money;
let expenses = [];
let income = 'фриланс';
let mission = 200000;
let period = 6;
let budgetDay;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке? Да / нет');
let resultArr; 
let expensesAmount;


const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
const showTypeOf = val => console.log(val, typeof (val));

const start = function() {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }
};

const getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    sum += +prompt('Во сколько это обойдется?');
  }
  return sum;
};

const accumulatedMonth = function() {
  return (money - expensesAmount);
};

const getTargetMonth = function() {
  let result = (mission - (period * accumulatedMonth())) / accumulatedMonth();
  
  if (result > 0) {
    console.log('Цель будет достигнута');
  } else if (result < 0) {
    console.log('Цель не будет достигнута');
  }

  return result;
};

const getStatusIncome = function(param) {
  if (param > 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (param > 600 && param < 1200) {
    console.log('У вас средний уровень дохода');
  } else if (param < 600 && param > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (param > -1) {
    console.log('Что то пошло не так');
  }
};

start();

resultArr = addExpenses.toLocaleLowerCase().split(', ');
expensesAmount = getExpensesMonth();
budgetDay = (accumulatedMonth() / 30);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getStatusIncome(budgetDay);

console.log(resultArr);
console.log('budgetDay: ', Math.floor(budgetDay));
console.log('Сколько месяцев осталось до цели:', getTargetMonth());
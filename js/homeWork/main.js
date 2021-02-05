'use strict';

let isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке? Да / нет');

let start = () => {
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }

};

start();

let expenses = [];


let income = 'фриланс';
let mission = 200000;
let period = 6;

let resultArr = addExpenses.toLocaleLowerCase().split(', ');

let getExpensesMonth = () => {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    sum += +prompt('Во сколько это обойдется?');
  }

  return sum;
};

let expensesAmount = getExpensesMonth();

let accumulatedMonth = function () {
  return (money - expensesAmount);
};

let budgetDay = (accumulatedMonth() / 30);

let getTargetMonth = () => {

  let result = (mission - (period * accumulatedMonth())) / accumulatedMonth();

  if (result > 0) {
    console.log('Цель будет достигнута');
  } else if (result < 0) {
    console.log('Цель не будет достигнута');
  }

  return result;
};

function showTypeOf(val) {
  console.log(val, typeof (val));
}

function getStatusIncome(param) {
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


showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

getStatusIncome(budgetDay);

console.log(resultArr);
console.log('budgetDay: ', Math.floor(budgetDay));
console.log('Сколько месяцев осталось до цели:', getTargetMonth());
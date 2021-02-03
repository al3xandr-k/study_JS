'use strict';

let money = +prompt('Ваш месячный доход?', 55000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке? Да / нет');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 25000);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 10000);

let income = 'фриланс';
let mission = 200000;
let period = 6;

let resultArr = addExpenses.toLocaleLowerCase().split(', ');

function getExpensesMonth(sum1, sum2) {
  return (sum1 + sum2);
};

let accumulatedMonth = function() {
  return (money - getExpensesMonth(amount1, amount2));
};

let budgetDay = (accumulatedMonth() / 30);

let getTargetMonth = function() {
  return (mission - (period * accumulatedMonth())) / accumulatedMonth();
};

function showTypeOf(val) {
  console.log(val, typeof (val));
}

function getStatusIncome(param) {
  if ( param > 1200 ) {
    console.log('У вас высокий уровень дохода');
  } else if ( param > 600 && param < 1200 ) {
    console.log('У вас средний уровень дохода');
  } else if ( param < 600 &&  param > 0) {
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
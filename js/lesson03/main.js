'use strict';

let money = +prompt('Ваш месячный доход?', 55000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = prompt('Есть ли у вас депозит в банке? Да / нет');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 25000);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 10000);

let income = 'фриланс';
let mission = 200000;
let period = 6;
let accumulatedMonth = getAccumulatedMonth();
let monthLeft = getTargetMonth();


let lowerCase = addExpenses.toLocaleLowerCase();
let result = lowerCase.split(', ');

let budgetDay = (accumulatedMonth / 30);


deposit = deposit === "Да" || deposit === 'да' ? true : false;

function getExpensesMonth() {
  return (amount1 + amount2);
};

function getAccumulatedMonth() {
  return money - getExpensesMonth();
};

function getTargetMonth() {
  return (mission - (period * accumulatedMonth)) / accumulatedMonth;
}

if ( budgetDay > 1200 ) {
  console.log('У вас высокий уровень дохода');
} else if ( budgetDay > 600 && budgetDay < 1200 ) {
  console.log('У вас средний уровень дохода');
} else if ( budgetDay < 600 &&  budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay > -1) {
  console.log('Что то пошло не так');
}


console.log(typeof money);
console.log(typeof income); 
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(addExpenses + '.');
console.log(deposit);
console.log(result);
console.log(`Период равен ${period} месяцев.`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log('budgetDay: ', Math.floor(budgetDay));
console.log('budgetMonth: ', getAccumulatedMonth());
console.log('Бюджет на месяц:', money);
console.log('expenses1: ', expenses1);
console.log('amount1: ', amount1);
console.log('expenses2: ', expenses2);
console.log('amount2: ', amount2);
console.log('Сколько месяцев осталось до цели:', Math.ceil(monthLeft));
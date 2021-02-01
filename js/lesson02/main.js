'use strict';

let money = +prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = prompt('Есть ли у вас депозит в банке? Да / нет');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');

let income = 'фриланс';
let mission = 200000;
let period = 6;


let lowerCase = addExpenses.toLocaleLowerCase();
let result = lowerCase.split(', ');

let budgetMonth = (money - (amount1 + amount2));
let budgetDay = (budgetMonth / 30);

let monthLeft = (mission - (period * budgetMonth)) / budgetMonth;

deposit = deposit === "Да" || deposit === 'да' ? true : false;

if ( budgetDay > 1200 ) {
  console.log('У вас высокий уровень дохода');
} else if ( budgetDay > 600 && budgetDay < 1200 ) {
  console.log('У вас средний уровень дохода');
} else if ( budgetDay < 600 &&  budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay > -1) {
  console.log('Что то пошло не так');
}

// Саш, нужен твой совет так правильно делать, если через switch? Не разу им не пользовался решил попробовать. У знакомого видел просто в Реакте что он использовал switch case.

/*
switch (true) {
  case budgetDay > 1200:
    console.log('У вас высокий уровень дохода');
    break;
  case budgetDay > 600 && budgetDay < 1200:
    console.log('У вас средний уровень дохода');
    break;
    case budgetDay < 600 &&  budgetDay > 0:
      console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    case budgetDay > -1:
      console.log('Что то пошло не так');
      break;
}
*/

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
console.log('budgetMonth: ', Math.ceil(budgetMonth));
console.log('Бюджет на месяц:', money);
console.log('expenses1: ', expenses1);
console.log('expenses2: ', expenses2);
console.log('amount1: ', amount1);
console.log('amount2: ', amount2);
console.log('Сколько месяцев осталось до цели:', Math.ceil(monthLeft));
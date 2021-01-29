//! 1
let money = 1000;;
let income = 'фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 2000;
let period = 6;


//! 2
//* 2.1

console.log(typeof money); 
console.log(typeof income); 
console.log(typeof deposit);

//* 2.2
console.log(addExpenses.length);

//* 2.3
console.log('Период равен ' + period + ' месяцев.');
console.log(`Период равен ${period} месяцев.`);
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);

//* 2.4
let lowerCase = addExpenses.toLocaleLowerCase();

console.log(lowerCase.split(', '));

//* 2.5

let budgetDay = (money / 30);

//* 2.6
console.log('budgetDay: ', budgetDay);
console.log('budgetDay: ', parseInt(budgetDay));

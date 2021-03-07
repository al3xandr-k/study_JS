'use strict'

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btnSum = document.querySelector('#sum');
const btnMult = document.querySelector('#mult');
const res = document.querySelector('#res');
let result;

const calculator = {
  sum() {
    result = +a.value + +b.value;

    console.log('result: ', result);

    calculator.show();
  },
  mult() {
    result = +a.value * +b.value;

    console.log('result: ', result);

    calculator.show();
  },
  show() {
    res.innerHTML = result
  }
}

btnSum.addEventListener('click', ()=>{
  calculator.sum();
});

btnMult.addEventListener('click', ()=>{
  calculator.mult();
});

// res.addEventListener('input', ()=>{
//   calculator.show();
// });
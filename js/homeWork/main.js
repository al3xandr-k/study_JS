'use strict'

function getResult(x, y) {
  let result

  result = x ** y
  let sum = result.toString().split('')

  sum.reduce((acc, item) => {
    console.log(+acc + +item)
    return +acc + +item
  }, 0)
  
  return result
}

console.log(getResult(4, 8))
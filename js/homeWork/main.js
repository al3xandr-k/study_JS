'use strict'

function getResult(x, y) {
  let result

  result = x ** y

  let sum = result.toString().split('').reduce((acc, item) => {
    return +acc + +item
  })

  return sum
}

console.log(getResult(4, 8))
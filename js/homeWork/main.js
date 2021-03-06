
'use strict'

/* Напишите функцию на JS. Цель: Убрать все объекты с типом additional, а для basic очки уменьшить в двое.
Изменить необходимо исходный массив*/

const myLesson = [
  { lesson: 1, type: 'basic', points: 2 },
  { lesson: 2, type: 'additional', points: 4 },
  { lesson: 3, type: 'basic', points: 6 },
  { lesson: 4, type: 'additional', points: 3 },
  { lesson: 5, type: 'basic', points: 4 },
  { lesson: 6, type: 'basic', points: 2 },
  { lesson: 7, type: 'additional', points: 2 },
  { lesson: 8, type: 'basic', points: 6 },
  { lesson: 9, type: 'basic', points: 4 },
  { lesson: 10, type: 'basic', points: 6 },
  { lesson: 11, type: 'additional', points: 5 },
  { lesson: 12, type: 'basic', points: 2 },
  { lesson: 13, type: 'additional', points: 2 },
  { lesson: 14, type: 'basic', points: 4 },
  { lesson: 15, type: 'additional', points: 1 },
  { lesson: 16, type: 'additional', points: 7 },
]

function funcArr() {

  myLesson.map((item, index) => {

    if (item.type.includes('additional')) {
      myLesson.splice(index, 1)
      // тут не удаляет последний элемент lesson: 16

    } else if (item.type.includes('basic')) {
      console.log('4 элемента а не все', item)
      //тут почему та он видит только 4 элемента с type: basic

    }
  })
}

console.log(myLesson)
funcArr()
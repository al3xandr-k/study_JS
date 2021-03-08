'use strict'

const country = document.querySelector('#country')
const city = document.querySelector('#city').options
const result = document.querySelector('.result')

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}


country.addEventListener('change', () => {
  let valueSelect = country.value

  if (valueSelect === 'rus') {
    cityArr.rus.forEach(item => {
      console.log('item: ', item);
    });
  } else if (valueSelect === 'uk') {
    cityArr.uk.forEach(item => {
      console.log('item: ', item);
    });
  } else if (valueSelect === 'bel') {
    cityArr.bel.forEach(item => {
      console.log('item: ', item);
    });
  } else if (valueSelect === 'jap') {
    cityArr.jap.forEach(item => {
      console.log('item: ', item);
    });
  }
})

// city.addEventListener('change', () => {
//   city[city.length] = new Option(cityArr.rus, true)
//   city[city.length] = new Option(cityArr.uk, true)
//   city[city.length] = new Option(cityArr.bel, true)
//   city[city.length] = new Option(cityArr.jap, true)
// })
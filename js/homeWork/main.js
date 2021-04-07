'use strict'

const country = document.querySelector('#country')
const city = document.querySelector('#city')
const output = document.querySelector('.result')

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

country.addEventListener('change', () => {
  let valueSelect = country.value

  cityArr[valueSelect].forEach(item => {
    const option = document.createElement('option')

    option.textContent = item
    city.append(option)
  })
})

city.addEventListener('change', () => {

  let valueSelect = city.value

  output.textContent = valueSelect

});
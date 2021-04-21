const accorion = () => {
  const accoriodItem = document.querySelectorAll('.accordeon > .element')

  accoriodItem.forEach(item => {
    const elementContent = item.querySelector('.element-content')
    item.addEventListener('click', () => {

      item.classList.toggle('active')

      if (item.closest('.active')) {
        elementContent.style.display = 'block'
      } else {
        elementContent.style.display = 'none'
      }
    })
  })
}

export default accorion
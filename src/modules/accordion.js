const accordion = () => {
  // const accoriodItem = document.querySelectorAll('.accordeon > .element')

  // accoriodItem.forEach(item => {
  //   const elementContent = item.querySelector('.element-content')
  //   item.addEventListener('click', () => {

  //     item.classList.toggle('active')

  //     if (item.closest('.active')) {
  //       elementContent.style.display = 'block'
  //     } else {
  //       elementContent.style.display = 'none'
  //     }
  //   })
  // })

  const element = document.querySelectorAll('.accordeon > .element')

  element.forEach(item => {
    item.addEventListener('click', (event) => {
      const target = event.target

      element.forEach(item => {
        const elementContent = item.querySelector('.element-content')
        item.classList.remove('active')
        elementContent.style.display = 'none'
      })

      target.closest('.element').classList.add('active')

      if (item.classList.contains("active")) {
        const elementContent = item.querySelector('.element-content')
        elementContent.style.display = "block"
      }
    })
  })
}

export default accordion
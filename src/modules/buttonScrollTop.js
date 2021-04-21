const buttonScrollTop = () => {
  const buttonUp = document.querySelector('.up')

  buttonUp.style.display = 'none'

  window.onscroll = () => {
    buttonDisable()
  }

  const buttonDisable = () => {
    if (document.documentElement.scrollTop > 100) {
      buttonUp.style.display = 'block'
    } else {
      buttonUp.style.display = 'none'
    }
  }

  buttonUp.addEventListener('click', (event) => {
    event.preventDefault()

    document.documentElement.scrollTop = 0
  })
}

export default buttonScrollTop
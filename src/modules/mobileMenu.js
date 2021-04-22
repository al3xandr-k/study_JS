const mobileMenu = () => {
  const mobScreenMenu = document.querySelector('.mobile-menu')
  const body = document.querySelector('body')

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.mob-menu-btn')) {
      mobScreenMenu.classList.add('open')
    } else if (target.closest('.close')) {
      mobScreenMenu.classList.remove('open')
    } else if (target.closest('.overlay')) {
      mobScreenMenu.classList.remove('open')
    } if (target.tagName === 'A' && target.closest('.mobile-menu')) {
      mobScreenMenu.classList.remove('open')
    }
  })
}

export default mobileMenu
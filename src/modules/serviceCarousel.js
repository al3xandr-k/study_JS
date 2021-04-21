const serviceCarousel = () => {
  const body = document.querySelector('body')
  const modalCallBack = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.fancyboxModal')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    }
  })  
}

export default serviceCarousel
const buttonServicesModal = () => {

  const body = document.querySelector('body')
  const modalCallBack = document.querySelector('#callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.button-services')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    }
  })
}

export default buttonServicesModal
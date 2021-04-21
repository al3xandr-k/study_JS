const modalCallBackForm = () => {

  const body = document.querySelector('body');

  const modalCallBack = document.querySelector('#callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  // PopUp Form ()
  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.callback-btn')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    } else if (target.closest('.modal-close')) {
      modalCallBack.style.display = 'none'
      modalOverlay.style.display = 'none'
    } else if (target.closest('.modal-overlay')) {
      modalCallBack.style.display = 'none'
      modalOverlay.style.display = 'none'
    }
  })
}

export default modalCallBackForm
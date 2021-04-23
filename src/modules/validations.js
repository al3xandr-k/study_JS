import maskPhone from './maskPhone'

const validations = () => {
  const form = document.querySelectorAll('form')
  const formBtn = document.querySelector('.feedback')
  const input = document.querySelectorAll('input')
  input.forEach((item) => {
    item.setAttribute('required', true)
  })
  form.forEach((item) => {
    item.addEventListener('input', (event) => {
      const target = event.target
      if (target.placeholder === 'Ваше имя') {
        target.value = target.value.replace(/[^А-Яа-яЁё\ ]/, '')
      } else if (target.placeholder === 'Телефон*') {
        maskPhone('.tel');
        if (target.value.length === 12) {
          target.style.border = '2px solid green'
          formBtn.disabled = false
        }
      }
    })
  })
}
export default validations
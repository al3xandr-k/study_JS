const sendForm = () => {
  const errorMessage = 'Что то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Ваша заявка отправлена! Мы с вами свяжемся!';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(item)
      const body = {}

      statusMessage.textContent = loadMessage

      item.append(statusMessage)

      formData.forEach((value, key) => {
        body[key] = value
      })

      postData(body)
        .then(() => {
          setTimeout(() => {
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200.')
              }
            }

            form.forEach(item => {
              item.reset()
            })

            statusMessage.textContent = successMessage
            statusMessage.style.color = '#000'
          }, 3000)

          setTimeout(() => {
            statusMessage.textContent = ''
          }, 5000)

          setTimeout(() => {
            const modalCallBack = document.querySelector('#callback')
            const modalOverlay = document.querySelector('.modal-overlay')

            modalCallBack.style.display = 'none'
            modalOverlay.style.display = 'none'
          }, 5500)
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage
          console.error(error)
        })
    })
  })

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}

export default sendForm
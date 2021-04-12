const sendForm = () => {
  const errorMessage = 'Что то пошло не так...';
  // const loadMessage = 'Загрузка...';
  const successMessage = 'Ваша заявка отправлена! Мы с вами свяжемся!';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      //pre Loader
      const preloader = document.querySelector('.preloader');
      const formData = new FormData(item);
      const body = {};

      preloader.style.display = 'block';

      item.append(statusMessage);

      formData.forEach((value, key) => {
        body[key] = value;
      });

      postData(body)
        .then(() => {
          setTimeout(() => {
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200.');
              }
            }
            preloader.style.display = 'none';

            form.forEach(item => {
              item.reset();
            });

            statusMessage.textContent = successMessage;
            statusMessage.style.color = '#fff';
          }, 3000);

          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);

          setTimeout(() => {
            const popup = document.querySelector('.popup');
            popup.style.display = 'none';
          }, 5500);
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  };
};

export default sendForm;
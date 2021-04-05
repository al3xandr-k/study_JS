const sendForm = () => {
  const errorMessage = 'Что то пошло не так...';
  // const loadMessage = 'Загрузка...';
  const successMessage = 'Ваша заявка отправлена! Мы с вами свяжемся!';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      item.append(statusMessage);

      //pre Loader
      const preloader = document.querySelector('.preloader');
      preloader.style.display = 'block';

      const formData = new FormData(item);

      postData(formData)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          }

          setTimeout(() => {
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

  const postData = (formData) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    })
  };
};

export default sendForm;
const togglePopUp = () => {
  const popUp = document.querySelector('.popup');
  const btnPopUp = document.querySelectorAll('.popup-btn');
  const popUpContent = document.querySelector('.popup-content');

  btnPopUp.forEach(elem => {
    elem.addEventListener('click', () => {
      popUp.style.display = 'block';

      if (window.screen.width > 768) {
        animate({
          duration: 200,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popUpContent.style.top = progress * 250 + 'px';
          }
        });
      } else {
        popUp.style.display = 'block';
        popUpContent.style.transform = '';
      };
      //PopUp animation End.
    });
  });

  popUp.addEventListener('click', (event) => {
    const form3Name = document.getElementById('form3-name');
    const form3Phone = document.getElementById('form3-phone');
    const form3Email = document.getElementById('form3-email');

    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
      form3Name.value = '';
      form3Phone.value = '';
      form3Email.value = '';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popUp.style.display = 'none';
        form3Name.value = '';
        form3Phone.value = '';
        form3Email.value = '';
      };
    };
  });
};

export default togglePopUp;
const toggleMenu = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('menu');

  body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.menu')) {
      handlerMenu();
    } else if (target.classList.contains('close-btn')) {
      handlerMenu();
    } else if (target.tagName === 'A' && target.closest('menu')) {
      handlerMenu();
    } else if (target.closest('menu')) {
      return;
    } else {
      menu.classList.remove('active-menu');
    };
  });

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };
};

export default toggleMenu;
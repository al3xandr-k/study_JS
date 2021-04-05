const tabs = () => {
  const serviceHeader = document.querySelector('.service-header');
  const serviceHeaderTab = serviceHeader.querySelectorAll('.service-header-tab');
  const serviceTab = document.querySelectorAll('.service-tab');

  const toogleTabContent = (index) => {
    for (let i = 0; i < serviceTab.length; i++) {
      if (index === i) {
        serviceHeaderTab[i].classList.add('active');
        serviceTab[i].classList.remove('d-none');
      } else {
        serviceHeaderTab[i].classList.remove('active');
        serviceTab[i].classList.add('d-none');
      };
    };
  };

  serviceHeader.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.service-header-tab');

    if (target) {
      serviceHeaderTab.forEach((item, index) => {
        if (item === target) {
          toogleTabContent(index);
        };
      });
    };
  });
};

export default tabs;
const photoTeam = () => {
  const photoTeam = document.querySelectorAll('.command__photo');
  const arrSrc = [];

  photoTeam.forEach(item => {
    arrSrc.push(item.src);
  });

  photoTeam.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => {
      const target = event.target;

      target.src = target.dataset.img;
    });

    item.addEventListener('mouseout', (event) => {
      const target = event.target;

      if (event.type === 'mouseout') {
        target.src = arrSrc[index];
      };
    });
  });
};

export default photoTeam;
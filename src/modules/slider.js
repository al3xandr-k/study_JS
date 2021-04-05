const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item');
  const slider = document.querySelector('.portfolio-content');
  let dot = document.querySelectorAll('.dot');

  let currentSlide = 0;
  let interval;

  const dotsAdd = () => {

    slide.forEach(() => {
      const portfolioDots = document.querySelector('.portfolio-dots');
      const li = document.createElement('li');

      li.classList.add('dot');
      portfolioDots.append(li);
    })

    dot = document.querySelectorAll('.dot');

    dot.forEach((item) => {
      if (!item.classList.contains('dot-active')) {
        prevSlide(dot, currentSlide, 'dot-active');
        nextSlide(dot, currentSlide, 'dot-active');
      }
    });

  };

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    };

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    };

    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        };
      });
    };

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    };

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    };

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', (event) => {
    let target = event.target;

    if (target.matches('.portfolio-btn') || target.matches('.dot')) {
      stopSlide();
    };
  });

  slider.addEventListener('mouseout', (event) => {
    let target = event.target;

    if (target.matches('.portfolio-btn') || target.matches('.dot')) {
      startSlide();
    };
  });

  dotsAdd();
  startSlide(2000);
};

export default slider;
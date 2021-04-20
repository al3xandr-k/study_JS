'use strict'
//Modal for button call back
const modalCallBackForm = () => {

  const body = document.querySelector('body');

  const modalCallBack = document.querySelector('.modal-callback')
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

modalCallBackForm()

//Header section Slider top-slider
const topSliderScroll = () => {

  const slide = document.querySelectorAll('.table')
  const slideItem = document.querySelectorAll('.item')

  let currentSlide = 0

  const autoPlaySlide = () => {
    slide[currentSlide].classList.remove('active')
    slideItem[currentSlide].style.display = 'none'
    currentSlide++

    if (currentSlide >= slide.length) {
      currentSlide = 0
    }

    slideItem[currentSlide].style.display = 'block'
    slide[currentSlide].classList.add('active')
  }

  const startSlide = () => {
    setInterval(autoPlaySlide, 3000)
  }

  startSlide()
}

topSliderScroll()

//Service section Carousel
const serviceCarousel = () => {
  const body = document.querySelector('body')
  const modalCallBack = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.fancyboxModal')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    }
  })

  class SliderCarousel {
    constructor({ main, wrap, next, prev, infinity = false, position = 0, slidesToShow = 3, responsive }) {

      if (!main && !wrap) {
        console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
      };

      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow
      };
      this.responsive = responsive;
    };

    init() {
      this.addGloClass();
      this.addStyle();

      if (this.prev && this.next) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      };

      if (this.responsive) {
        this.responseInit();
      };

    };

    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');

      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      };
    };

    addStyle() {
      let style = document.getElementById('sliderCarousel-style');

      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      };

      style.textContent = `
        .glo-slider {
          position: relative !important;
          overflow: hidden !important;
        }
  
        .glo-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
  
        .glo-slider__item {
          display: flex !important;
          aling-items: center !important;
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
      `;

      document.head.append(style);
    };

    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    };

    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;

        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        };

        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      };
    };

    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;

        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        };

        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      };
    };

    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');

      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';

      this.main.append(this.prev);
      this.main.append(this.next);

      const style = document.createElement('style');

      style.textContent = `
        .glo-slider__next,
        .glo-slider__prev {
          margin: 0 10px !important;
          border: 20px solid #19b5fe !important;
          border-radius: 50% !important;
          background: transparent !important;
        }
  
        .glo-slider__next:hover,
        .glo-slider__prev:hover,
        .glo-slider__next:focus,
        .glo-slider__prev:focus {
          background: transparent !important;
          outline: none !important;
        }
      `;
      document.head.append(style);
    };

    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;

        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            };
          };
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        };
      };

      checkResponse();

      window.addEventListener('resize', checkResponse);
    };
  };

  const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
      breakpoint: 992,
      slideToShow: 3
    },
    {
      breakpoint: 768,
      slideToShow: 2
    },
    {
      breakpoint: 576,
      slideToShow: 1
    }]
  });

  carousel.init();
}

serviceCarousel()

//Button services section modal
const buttonServicesModal = () => {

  const body = document.querySelector('body')
  const modalCallBack = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.button-services')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    }
  })
}

buttonServicesModal()

//Accardion faq section
const accoriod = () => {
  const accoriodItem = document.querySelectorAll('.accordeon > .element')

  accoriodItem.forEach(item => {
    const elementContent = item.querySelector('.element-content')
    item.addEventListener('click', () => {

      item.classList.toggle('active')

      if (item.closest('.active')) {
        elementContent.style.display = 'block'
      } else {
        elementContent.style.display = 'none'
      }
    })
  })

}

accoriod()
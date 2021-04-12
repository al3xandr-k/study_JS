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
      };

      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      };

      .glo-slider__item {
        display: flex !important;
        aling-items: center !important;
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      };
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
      };

      .glo-slider__next:hover,
      .glo-slider__prev:hover,
      .glo-slider__next:focus,
      .glo-slider__prev:focus {
        background: transparent !important;
        outline: none !important;
      };
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
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  // prev: '#companies-left',
  // next: '#companies-right',
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

export default carousel;
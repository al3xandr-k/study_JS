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

export default topSliderScroll
'use strict'

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

// const smoothScroll = () => {

//   //btn top menu
//   const servicesBtn = document.querySelector('a[href="#services"]')
//   const faqBtn = document.querySelector('a[href="#faq"]')
//   const contactsBtn = document.querySelector('a[href="#contacts"]')

//   //all sections
//   const services = document.getElementById('services')
//   const faq = document.getElementById('faq')
//   const contacts = document.getElementById('contacts')

//   //Menu button smooth scroll to next section.

//   const topMenu = document.querySelector('.top-menu')

//   topMenu.addEventListener('click', event => {
//     const target = event.target
//     event.preventDefault()
//     if (target === servicesBtn) {

//       services.scrollIntoView({ behavior: "smooth" });
//     }

//   })

// const allSection = (button, section) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault()

//     section.scrollIntoView({ behavior: 'smooth' })
//   })
// }

// allSection(servicesBtn, services)
// allSection(faqBtn, faq)
// allSection(contactsBtn, contacts)
// }

// smoothScroll()

//header slider
// const slider = () => {
//   const slider = document.querySelector('.top-slider')
//   console.log('slider: ', slider)


// }

// slider()

//Service Carousel
const serviceCarousel = () => {
  const body = document.querySelector('body')
  const modalCallBack = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')
  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRigth = document.querySelector('.arrow-right')
  const slidesToShow = 1
  const slides = document.querySelectorAll('.services-carousel')
  const options = {
    position: 0,
    infinity: false,
    widthSlide: Math.floor(100 / slidesToShow),
    maxPosition: slides.length - slidesToShow
  }


  //let currentSlide = 0;

  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.fancyboxModal')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    }

    // if (target.closest('.arrow-left')) {
    //   currentSlide++
    // } else if (target.closest('.arrow-right')) {
    //   currentSlide--
    // }
  })

  //карусель

  const prevSlider = () => {

  }

  const nextSlider = () => {
    
  }


  arrowLeft.addEventListener('click', prevSlider)
  arrowRigth.addEventListener('click', nextSlider)

}

serviceCarousel()


//Button services modal
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
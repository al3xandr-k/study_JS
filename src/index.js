'use strict'

import modalCallBackForm from './modules/modalCallBackForm'
import topSliderScroll from './modules/topSliderScroll'
import carousel from './modules/sliderCarousel'
import serviceCarousel from './modules/serviceCarousel'
import buttonServicesModal from './modules/buttonServicesModal'
import accordion from './modules/accordion'
import buttonScrollTop from './modules/buttonScrollTop'
import validations from './modules/validations'
import sendForm from './modules/sendForm'
import mobileMenu from './modules/mobileMenu'
import checkData from './modules/checkData'

//Modal for button call back
modalCallBackForm()

//Header section Slider top-slider
topSliderScroll()

//Service section Carousel
serviceCarousel()

//Slider Carousel
carousel.init()

//Button services section modal
buttonServicesModal()

//Accordion faq section
accordion()

//Button Scroll Top
buttonScrollTop()

//Validation Form
validations()

//Chech Data
checkData()

//Send form
sendForm()

//Mobile Menu
mobileMenu()
'use strict';

import timer from './modules/timer';
import smoothScroll from './modules/smoothScroll';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import photoTeam from './modules/photoTeam';
import regularExpression from './modules/regularExpression';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
// import carousel from './modules/sliderCarousel';

//Timer.
timer('2021-04-09');

//Smooth scroll to section.
smoothScroll();

//Menu Hamburger.
toggleMenu();

//PopUp window.
togglePopUp();

//Tabs.
tabs();

//Slider.
slider();

//change photo section "Our team".
photoTeam();

//RegExp section calc sum.
regularExpression();

//Calculator
calc();

//Send ajax-form
sendForm();

//slider Carusel
// carousel.init();
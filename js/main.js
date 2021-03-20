window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//Timer.
	const timer = deadline => {
		const timerHours = document.querySelector('#timer-hours');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerSeconds = document.querySelector('#timer-seconds');

		const addZero = num => {
			if (num <= 9) {
				return '0' + num;
			} else {
				return num;
			}
		};

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor(timeRemaining / 60 / 60);

			return { timeRemaining, hours, minutes, seconds };

		};

		function updateClock() {
			const timer = getTimeRemaining();

			timerSeconds.textContent = addZero(timer.seconds);
			timerMinutes.textContent = addZero(timer.minutes);
			timerHours.textContent = addZero(timer.hours);

			if (timer.timeRemaining <= 0) {
				timerSeconds.textContent = '00';
				timerMinutes.textContent = '00';
				timerHours.textContent = '00';
			} else if (timer.timeRemaining > 0) {
				setTimeout(updateClock);
			}
			clearInterval();
		}
		updateClock();
	};
	timer('2021-03-17');

	//Smooth scroll to section.
	const smoothScroll = () => {
		//All buttons of sections menu.
		const btnScrollBlock = document.querySelectorAll('a[href="#service-block"]');
		const btnScrollPortfolio = document.querySelector('a[href="#portfolio"]');
		const btnScrollCalc = document.querySelector('a[href="#calc"]');
		const btnScrollCommand = document.querySelector('a[href="#command"]');
		const btnScrollConnect = document.querySelector('a[href="#connect"]');

		//All sections.
		const serviceSection = document.querySelector('#service-block');
		const portfolioSection = document.querySelector('#portfolio');
		const calcSection = document.querySelector('#calc');
		const commandSection = document.querySelector('#command');
		const connectSection = document.querySelector('#connect');

		//Menu button smooth scroll to next section.
		const allBtn = (button, section) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();

				section.scrollIntoView({ behavior: "smooth" });
			});
		};

		allBtn(btnScrollBlock[0], serviceSection);
		allBtn(btnScrollBlock[1], serviceSection);
		allBtn(btnScrollPortfolio, portfolioSection);
		allBtn(btnScrollCalc, calcSection);
		allBtn(btnScrollCommand, commandSection);
		allBtn(btnScrollConnect, connectSection);
	};
	smoothScroll();

	//Menu Hamburger.
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
	toggleMenu();

	//PopUp window.
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup');
		const btnPopUp = document.querySelectorAll('.popup-btn');
		const popUpContent = document.querySelector('.popup-content');

		btnPopUp.forEach(elem => {
			elem.addEventListener('click', () => {
				popUp.style.display = 'block';

				//PopUp animation.
				function animate({ timing, draw, duration }) {

					let start = performance.now();

					requestAnimationFrame(function animate(time) {
						let timeFraction = (time - start) / duration;
						if (timeFraction > 1) timeFraction = 1;

						let progress = timing(timeFraction);

						draw(progress);

						if (timeFraction < 1) {
							requestAnimationFrame(animate);
						}

					});
				}

				if (window.screen.width > 768) {
					animate({
						duration: 200,
						timing(timeFraction) {
							return timeFraction;
						},
						draw(progress) {
							popUpContent.style.top = progress * 250 + 'px';
						}
					});
				} else {
					popUp.style.display = 'block';
					popUpContent.style.transform = '';
				};
				//PopUp animation End.
			});
		});

		popUp.addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popUp.style.display = 'none';
			} else {
				target = target.closest('.popup-content');

				if (!target) {
					popUp.style.display = 'none';
				};
			};
		});
	};
	togglePopUp();

	//Tabs.
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

	tabs();

	//Slider.
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

	slider();

	//change photo section "Our team".
	const photoTeam = () => {
		const photoTeam = document.querySelectorAll('.command__photo');

		photoTeam.forEach((item, index) => {

			const src = (url) => {
				return url.split('/').slice(-1);
			};

			item.addEventListener('mouseover', () => {

				if (index === 0) {
					item.setAttribute('src', `images/command/${src('images/command/command-1a.jpg')}`);
				} else if (index === 1) {
					item.setAttribute('src', `images/command/${src('images/command/command-2a.jpg')}`);
				} else if (index === 2) {
					item.setAttribute('src', `images/command/${src('images/command/command-3a.jpg')}`);
				} else if (index === 3) {
					item.setAttribute('src', `images/command/${src('images/command/command-4a.jpg')}`);
				} else if (index === 4) {
					item.setAttribute('src', `images/command/${src('images/command/command-5a.jpg')}`);
				} else if (index === 5) {
					item.setAttribute('src', `images/command/${src('images/command/command-6a.jpg')}`);
				};
			});

			item.addEventListener('mouseout', () => {
				if (index === 0) {
					item.setAttribute('src', `images/command/${src('images/command/command-1.jpg')}`);
				} else if (index === 1) {
					item.setAttribute('src', `images/command/${src('images/command/command-2.jpg')}`);
				} else if (index === 2) {
					item.setAttribute('src', `images/command/${src('images/command/command-3.jpg')}`);
				} else if (index === 3) {
					item.setAttribute('src', `images/command/${src('images/command/command-4.jpg')}`);
				} else if (index === 4) {
					item.setAttribute('src', `images/command/${src('images/command/command-5.jpg')}`);
				} else if (index === 5) {
					item.setAttribute('src', `images/command/${src('images/command/command-6.jpg')}`);
				};
			});
		});
	};

	photoTeam();

	//RegExp section calc sum.
	const regularExpression = () => {
		const calcItem = document.querySelectorAll('input.calc-item');
		const totalId = document.getElementById('total');
		const form2Name = document.getElementById('form2-name');
		const form2Message = document.getElementById('form2-message');


		//Section calc sum.
		calcItem.forEach(item => {
			item.addEventListener('input', () => {
				let text = item.value;

				totalId.textContent = text.replace(/\D/g, '');
			});
		});

		//Section connect.

		if (form2Name && form2Message) {
			form2Name.value.match(/([а-я])\s/gi);
			form2Message.value.match(/([а-я])\s\.+/gi);
		};
	};

	regularExpression();
});

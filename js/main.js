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
	timer('2021-03-14');

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
		const btnMenu = document.querySelector('.menu');
		const menu = document.querySelector('menu');
		const btnClose = document.querySelector('.close-btn');
		const menuItem = menu.querySelectorAll('ul > li');

		const handlerMenu = (index) => {
			menu.classList.toggle('active-menu');

			for (let i = 0; i < menuItem.length; i++) {
				if (index === i) {
					menuItem[i].classList.add('active-menu');
				} else {
					menuItem[i].classList.remove('active-menu');
				}
			};
		};

		// const menuAction = (item) => {
		// 	item.addEventListener('click', (event) => {
		// 		let target = event.target;
		// 		target = menu.classList.toggle('active-menu');
		// 		console.log('target: ', target);
		// 	});
		// };

		// menuAction(btnMenu);
		// menuAction(btnClose);

		btnMenu.addEventListener('click', (event) => {
			let target = event.target;
			target = handlerMenu();

			menuItem.forEach((item) => item.addEventListener('click', (index) => {
				let target = event.target;
				target = handlerMenu(index);
			}));

		});

		btnClose.addEventListener('click', (event) => {
			let target = event.target;
			target = menu.classList.toggle('active-menu');
		});

		// btnMenu.addEventListener('click', (e) => {
		// 	handlerMenu();
		// 	console.log(e.target);
		// });

		// btnClose.addEventListener('click', (e) => {
		// 	handlerMenu();
		// 	console.log(e.target);
		// });

		//menuItem.forEach(item => item.addEventListener('click', handlerMenu));
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

	//Tabs
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
});

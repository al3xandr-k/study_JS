window.addEventListener('DOMContentLoaded', () => {

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

	//Menu Hamburger.
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu');
		const menu = document.querySelector('menu');
		const btnClose = document.querySelector('.close-btn');
		const menuItem = menu.querySelectorAll('ul > li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		btnClose.addEventListener('click', handlerMenu);
		menuItem.forEach(item => item.addEventListener('click', handlerMenu));

	};
	toggleMenu();

	//PopUp window.
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup');
		const btnPopUp = document.querySelectorAll('.popup-btn');
		const btnPopUpClose = document.querySelector('.popup-close');
		const popUpContent = document.querySelector('.popup-content');
		let count = 0;

		btnPopUp.forEach(elem => {
			elem.addEventListener('click', () => {
				popUp.style.display = 'block';
			
				//PopUp animation.
				const animateDown = () => {
					count++;
					if (count < 160) {
						popUpContent.style.top = count + 'px';
						setTimeout(animateDown, 20);
					} else {
						clearInterval(interval);
					};
				};
		
				let interval = setInterval(animateDown, 20);
				//PopUp animation End.
			});
		});

		btnPopUpClose.addEventListener('click', () => {
			popUp.style.display = 'none';
		});

		popUp.addEventListener('click', () => {
			popUp.style.display = 'none';
		});
	};
	togglePopUp();
});

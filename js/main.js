window.addEventListener('DOMContentLoaded', () => {

	//Timer
	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor(timeRemaining / 60 / 60) % 24;
			const day = Math.floor(timeRemaining / 60 / 60 / 24);
			return { timeRemaining, hours, minutes, seconds };
		}

		function updateClock() {
			const timer = getTimeRemaining();

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if (timer.timeRemaining > 0) {
				setTimeout(updateClock, 1000);
			}
		}

		updateClock();
	}

	countTimer('9 March 2021');
});

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

export default timer;
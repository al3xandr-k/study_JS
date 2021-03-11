window.addEventListener('DOMContentLoaded', () => {

  const outText1 = document.querySelector('#out-text1');
  const outText2 = document.querySelector('#out-text2');
  const outText3 = document.querySelector('#out-text3');
  const outText4 = document.querySelector('#out-text4');

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const checkTime = time => {
      if (time < 10) {
        time = '0' + time;
      }
      return time;

    };
    
    outText2.textContent = 'Текущее время: ' + checkTime(hours) + ':' + checkTime(minutes) + ':' + checkTime(seconds) + ' PM';

    if (hours >= '05' && hours <= '11') {
      outText1.textContent = 'Доброе утро.';
    } else if (hours >= '12' && hours <= '15') {
      outText1.textContent = 'Добрый день.';
    } else if (hours >= '16' && hours <= '23') {
      outText1.textContent = 'Добрый вечер.';
    } else if (hours >= '24' && hours <= '04') {
      outText1.textContent = 'Доброй ночи.';
    }
  }, 1000);

  const currentDay = () => {

    const arrDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const date = new Date();
    const day = date.getDay();

    arrDays.forEach((item, index) => {
      if (day === index) {
        outText3.textContent = 'Сегодня: ' + item;
      }
    });
  };

  const daysLeft = (deadline) => {
    const date = new Date(deadline).getTime();
    const today = new Date().getTime();
    const daysLeft = (date - today) / 1000;
    const day = Math.floor(daysLeft / 60 / 60 / 24);

    outText4.textContent = 'До нового года осталось ' + day + ' дней.';
  };

  daysLeft('2021-12-31');
  currentDay();
});

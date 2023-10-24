let cities = ['sanFrancisco', 'paris', 'sydney'];

function formatClock(city) {
  let timeZone;

  if (city === 'sanFrancisco') {
    timeZone = 'US/Pacific';
  } else if (city === 'paris') {
    timeZone = 'Europe/Paris';
  } else if (city === 'sydney') {
    timeZone = 'Australia/Sydney';
  }

  let setDate = document.querySelector(`#${city} .date`);
  setDate.innerHTML = moment().tz(timeZone).format('LL');

  function updateClock() {
    let setTime = document.querySelector(`#${city} .time`);
    setTime.innerHTML = moment()
      .tz(timeZone)
      .format('h:mm:ss [<small>] A [</small>]');
  }

  updateClock();
  setInterval(updateClock, 1000);
}

cities.forEach(formatClock);

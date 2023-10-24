let myInterval;

function updateCity(event) {
  if (myInterval) {
    clearInterval(myInterval);
  }
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone
    .split('/')[1]
    .replace('Pacific', 'San Francisco')
    .replace('_', ' ');
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `
	<div class="city">
	<div>
	<h2>${cityName}</h2>
	<div class="date">${cityTime.format('LL')}</div>
	</div>
	<div class="time">${cityTime.format('h:mm:ss [<small>] A [</small>]')}</div>
		</div>
		`;

  function updateClock() {
    let updateCityTime = moment().tz(cityTimeZone);
    let setTime = document.querySelector(`.time`);
    setTime.innerHTML = updateCityTime.format('h:mm:ss [<small>] A [</small>]');
  }

  myInterval = setInterval(updateClock, 1000);
}

let citiesSelectElement = document.querySelector('#city-select');
citiesSelectElement.addEventListener('change', updateCity);

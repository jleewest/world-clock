function updateCity(event) {
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

  setInterval(function () {
    let updateCityTime = moment().tz(cityTimeZone);
    let setTime = document.querySelector(`.time`);
    setTime.innerHTML = updateCityTime.format('h:mm:ss [<small>] A [</small>]');
  }, 1000);
}

let citiesSelectElement = document.querySelector('#city-select');
citiesSelectElement.addEventListener('change', updateCity);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';















// Business Logic

function getWeather(zip) {
  let request = new XMLHttpRequest();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=5458d5a26391a7ffbada9b1565e5d284&units=imperial`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, zip);
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic

function printElements(apiResponse, zip) {
  document.querySelector('#showResponse').innerText = `The humidity in ${zip} is ${apiResponse.main.humidity}%.
  The temperature in Faherenheit is ${apiResponse.main.temp} degrees.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const zip = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getWeather(zip);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
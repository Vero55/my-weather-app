//Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();
console.log(now.getMonth());

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes > 9 ? minutes : "0" + minutes;
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${hours}:${minutes} <br /> <span class="dateToday">${day}, ${date} ${month} ${year}`;

//Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "d028f09bd7e7c83129cfe2f37fb67c42";
  let city = document.querySelector("#exampleInputCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit", searchCity);
function showPosition(position) {
  let apiKey = "d028f09bd7e7c83129cfe2f37fb67c42";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  console.log(apiUrl);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector(".btn-myLocation");
currentLocationButton.addEventListener("click", getCurrentPosition);

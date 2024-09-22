// selectors
const app = document.querySelector("#app");
const city = app.querySelector(".city");
const temp = app.querySelector(".temp");
const humidity = app.querySelector(".humidity");
const wind = app.querySelector(".wind");
const searchBox = app.querySelector(".searchBox");
const searchBtn = app.querySelector(".searchBtn");
const weatherIcons = app.querySelector(".weather-icon");
const weather = app.querySelector(".weather");
const sample = app.querySelector(".sample");
const error = app.querySelector(".error");
// function
const apiKey = "5a2178678817dd5a25279b6a81fb1750";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherCheck = async (cities) => {
  const res = await fetch(apiUrl + cities + `&appid=${apiKey}`);
  if (res.status === 404) {
    error.classList.remove("hidden");
    weather.classList.add("hidden");
  } else {
    const data = await res.json();
    console.log(data);
    weather.classList.remove("hidden");
    error.classList.add("hidden");
    sample.classList.add("hidden");
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcons.src = ".././public/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcons.src = ".././public/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcons.src = ".././public/images/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcons.src = ".././public/images/humidity.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcons.src = ".././public/images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcons.src = ".././public/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcons.src = ".././public/images/snow.png";
    }
  }
};
// weatherCheck(london);
searchBtn.addEventListener("click", () => {
  console.log("u type", searchBox.value);
  weatherCheck(searchBox.value);
  searchBox.innerText = null;
});

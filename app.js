const iconElement = document.querySelector(".weather-icon img");
const locationIcon = document.querySelector(".location-icon img");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const input = document.getElementById("search");

let city = "";
let latitude = 0.0;
let longitude = 0.0;

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        city = input.value;
        getSearchWeather(city);
        console.log(city);
    }
});

const weather = {
    temperature: {
        unit: "celsius"
    }
};

const KELVIN = 273;
const key = 'da9ea3a015e090bdec28882fd80b2578';

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = '<p>Browser doesn\'t support geolocation</p>';
}

function setPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

locationIcon.addEventListener("click", function(event) {
    console.log('Clicked on loc-icon', latitude, longitude);
    getWeather(latitude, longitude);
});

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function getSearchWeather(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    
    fetch(api)
        .then(response => response.json())
        .then(data => {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            displayWeather();
        })
        .catch(error => showError(error));
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(response => response.json())
        .then(data => {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            displayWeather();
        })
        .catch(error => showError(error));
}

function displayWeather() {
    iconElement.src = `icons/${weather.iconId}.png`;
    tempElement.innerHTML = `${weather.temperature.value} <span>°C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

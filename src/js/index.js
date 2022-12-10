import WeatherApi from './weather-api';
import FiveDaysForecast from './five-days-forecast';
import ThreeDaysForecast from './three-days-forecast';
import Weather from './weather';

const cardListElement = document.querySelector('.forecast-cards-container');
const mainCardElement = document.querySelector('.card-container');
const secondCardElement = document.querySelector('.second-card');
const thirdCardElement = document.querySelector('.third-card');

const weatherApi = new WeatherApi();

const forecast = new FiveDaysForecast(cardListElement, weatherApi);
const weather = new Weather(mainCardElement, weatherApi);
const secondCard = new ThreeDaysForecast(secondCardElement, weatherApi);
const thirdCard = new ThreeDaysForecast(thirdCardElement, weatherApi);

weather.init(3451190);
forecast.init(3451190);
secondCard.init(3450554);
thirdCard.init(6323121);
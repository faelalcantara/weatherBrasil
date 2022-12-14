import WeatherApi from './weather-api';
import ThreeDaysForecast from './three-days-forecast';

const firstCardElement = document.querySelector('.first-card');
const secondCardElement = document.querySelector('.second-card');
const thirdCardElement = document.querySelector('.third-card');
const forthCardElement = document.querySelector('.forth-card');
const fifthCardElement = document.querySelector('.fifth-card');
const sixthCardElement = document.querySelector('.sixth-card');

const weatherApi = new WeatherApi();

const firstCard = new ThreeDaysForecast(firstCardElement, weatherApi);
const secondCard = new ThreeDaysForecast(secondCardElement, weatherApi);
const thirdCard = new ThreeDaysForecast(thirdCardElement, weatherApi);
const forthCard = new ThreeDaysForecast(forthCardElement, weatherApi);
const fifthCard = new ThreeDaysForecast(fifthCardElement, weatherApi);
const sixthCard = new ThreeDaysForecast(sixthCardElement, weatherApi);

firstCard.init(3451190);
secondCard.init(3450554);
thirdCard.init(6320062);
forthCard.init(3448439);
fifthCard.init(6322752);
sixthCard.init(6323121);
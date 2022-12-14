import {getDayOfTheWeek, renderListWithTemplate} from './utils.js';

export default class Weather {
    constructor (listElement, forecastData) {
        this.listElement = listElement;
        this.forecastData = forecastData;
    }

    async init(cityId) {
        this.getWeather(cityId)
    }

    async getWeather(cityId) {

        let data = await this.forecastData.fetchWeatherData(cityId, 'weather');
        data.dt_txt = new Date();
        data.dayName = getDayOfTheWeek(data);

        let currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        data.date = 'Today - ' + data.dayName + ', ' + currentMonth + '/'  + currentDay
        data.imageName = data.name.replace(/[^\w\s]/gi, '').split(' ').join('')

        this.renderWeather(data);
    }

    prepareCardTemplate(template, weather) {
        template.querySelector('#weatherIcon').src = 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png';
        template.querySelector('.city-name').textContent = weather.name;
        template.querySelector('.hero-card-main').style.backgroundImage = `url(images/${weather.imageName}.jpg)` || 'url(images/noImage.jpg)';
        template.querySelector('.date').textContent = weather.date;
        template.querySelector('.weather').textContent = weather.weather[0].main;
        template.querySelector('.min-max').textContent = Math.round(weather.main.temp_min) + '° / ' + Math.round(weather.main.temp_max) + ' °';
        template.querySelector('.temperature').textContent = Math.round(weather.main.temp) + ' °F';
        return template;
    }

    renderWeather(data) {
        this.listElement.innerHTML = '';

        const template = document.getElementById('main-card-container');
        renderListWithTemplate(template, this.listElement, [data], this.prepareCardTemplate);

    }
}
import {getDayOfTheWeek, renderListWithTemplate} from './utils.js';

export default class FiveDaysForecast {
    constructor (listElement, forecastData) {
        this.listElement = listElement;
        this.forecastData = forecastData;
    }

    async init(cityId) {
        this.getList(cityId)
    }

    async getList(cityId) {
        const data = await this.forecastData.fetchWeatherData(cityId, 'forecast')

        let day2 = data.list[8];
        let day3 = data.list[16];
        let day4 = data.list[24];
        let day5 = data.list[32];
        let day6 = data.list[38];
        let fiveDaysForecastList = [day2, day3, day4, day5, day6];

        for (let i = 0; i < fiveDaysForecastList.length; i++) {
            fiveDaysForecastList[i].dayName = getDayOfTheWeek(fiveDaysForecastList[i]);
        }

        this.renderForecastList(fiveDaysForecastList);
    }

    prepareMainCardTemplate(template, weather) {
        template.querySelector('.img-card-icon').src = 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png';
        template.querySelector('.day').textContent = weather.dayName;
        template.querySelector('.weather').textContent = weather.weather[0].main;
        template.querySelector('.min-max').textContent = Math.round(weather.main.temp_min) + '° / ' + Math.round(weather.main.temp_max) + ' °';
        template.querySelector('.temp').textContent = Math.round(weather.main.temp) + ' °F';
        return template;
    }

    renderForecastList(sixDaysForecastList) {
        this.listElement.innerHTML = '';

        const template = document.getElementById('five-days-forecast-card-template');
        renderListWithTemplate(template, this.listElement, sixDaysForecastList, this.prepareMainCardTemplate);

    }
}
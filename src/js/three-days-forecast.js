import {getDayOfTheWeek, renderListWithTemplate} from './utils.js';

export default class ThreeDaysForecast {
    constructor (listElement, forecastData) {
        this.listElement = listElement;
        this.forecastData = forecastData;
    }

    async init(cityId) {
        this.getList(cityId)
    }

    async getList(cityId) {
        const data = await this.forecastData.fetchWeatherData(cityId, 'forecast')
        let today = data.list[0];
        let day2 = data.list[8];
        let day3 = data.list[16];
        let day4 = data.list[24];

        let threeDaysForecastList = [today, day2, day3, day4];

        for (let i = 0; i < threeDaysForecastList.length; i++) {
            threeDaysForecastList[i].dayName = getDayOfTheWeek(threeDaysForecastList[i]);
        }
        threeDaysForecastList.cityName = data.city.name
        threeDaysForecastList.imageName = threeDaysForecastList.cityName.replace(/[^\w\s]/gi, '').split(' ').join('')
        this.renderForecastList(threeDaysForecastList);
    }

    prepareSecondCardTemplate(template, weather) {
        template.querySelector('.city-name').textContent = weather.cityName;
        template.querySelector('.common-image').style.backgroundImage = `url(images/${weather.imageName}.jpg)` || 'url(images/noImage.jpg)';
        template.querySelector('.common-temperature').textContent = Math.round(weather[0].main.temp) + ' °F';
        template.querySelector('.common-weather').textContent = weather[0].weather[0].main;
        template.querySelector('.common-min-max').textContent = Math.round(weather[0].main.temp_min) + ' / ' + Math.round(weather[0].main.temp_max) + ' °F';

        template.querySelector('.img-card-icon1').src = 'http://openweathermap.org/img/wn/' + weather[1].weather[0].icon + '@2x.png';
        template.querySelector('.forecast-temp1').textContent = weather[1].dayName + ' - ' + Math.round(weather[1].main.temp) + '°';

        template.querySelector('.img-card-icon2').src = 'http://openweathermap.org/img/wn/' + weather[2].weather[0].icon + '@2x.png';
        template.querySelector('.forecast-temp2').textContent = weather[2].dayName + ' - ' + Math.round(weather[2].main.temp) + '°';

        template.querySelector('.img-card-icon3').src = 'http://openweathermap.org/img/wn/' + weather[3].weather[0].icon + '@2x.png';
        template.querySelector('.forecast-temp3').textContent = weather[3].dayName + ' - ' + Math.round(weather[3].main.temp) + '°';

        return template;
    }

    renderForecastList(threeDaysForecastList) {
        this.listElement.innerHTML = '';

        const template = document.getElementById('three-days-forecast-card-template');
        renderListWithTemplate(template, this.listElement, [threeDaysForecastList], this.prepareSecondCardTemplate);

    }
}
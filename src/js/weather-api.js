export default class WeatherApi {

    constructor () {
        this.apiKey = '1414ba56a14dbf67746a1932cb8b6b41';

    }

    async fetchWeatherData(cityId, type) {
        const url = `https://api.openweathermap.org/data/2.5/${type}?id=${cityId}&units=imperial&appid=${this.apiKey}`;

        return fetch(url)
            .then((response) => response.json())
            .then((data) => data);
    }

}
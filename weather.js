class Weather {
    constructor(city, state) {
        this.apiKey = '0dbf0aa9d0afa3fefc6df3f717879b4e';
        this.city = city;
        this.state = state;
    }


    //fetch
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}


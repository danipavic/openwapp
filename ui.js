class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.clouds = document.getElementById('w-clouds');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + ' \u00B0C';
        /* this.icon.setAttribute('src', weather.weather[0].icon); //deprecated api */
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
        this.wind.textContent = `Wind: Speed: ${weather.wind.speed}m/s Direction: ${weather.wind.deg}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        
    }
}
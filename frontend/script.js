function getWeather() {
    const apiKey = 'ec2dfe4241917575e3450de026c9cd8b';
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherMain = data.weather[0].main;
            const weatherImage = getWeatherImage(weatherMain);
            const weatherData = `
                <div class="weather-card" style="background-image: url('${weatherImage}')">
                    <h2>${data.name}</h2>
                    <p>Temperatura: ${data.main.temp} °C</p>
                    <p>Descripción: ${data.weather[0].description}</p>
                    <p>Humedad: ${data.main.humidity}%</p>
                    <p>Velocidad del viento: ${data.wind.speed} m/s</p>
                </div>
            `;
            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('weatherData').innerHTML = 'Error al obtener el clima. Por favor, intenta de nuevo.';
        });
}

function getWeatherImage(weatherMain) {
    switch(weatherMain.toLowerCase()) {
        case 'clear':
            return 'https://source.unsplash.com/1600x900/?clear-sky';
        case 'clouds':
            return 'https://source.unsplash.com/1600x900/?cloudy';
        case 'rain':
            return 'https://source.unsplash.com/1600x900/?rain';
        case 'snow':
            return 'https://source.unsplash.com/1600x900/?snow';
        case 'thunderstorm':
            return 'https://source.unsplash.com/1600x900/?thunderstorm';
        default:
            return 'https://source.unsplash.com/1600x900/?weather';
    }
}

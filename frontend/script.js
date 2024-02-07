function getWeather() {
    const apiKey = 'ec2dfe4241917575e3450de026c9cd8b';
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <h2>${data.name}</h2>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Descripción: ${data.weather[0].description}</p>
                <p>Humedad: ${data.main.humidity}%</p>
                <p>Velocidad del viento: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('weatherData').innerHTML = 'Error al obtener el clima. Por favor, intenta de nuevo.';
        });
}

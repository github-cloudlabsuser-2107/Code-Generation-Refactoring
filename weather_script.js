const apiKey = '1068859d4e02710de2471406195bed30'; // Reemplaza 'TU_API_KEY' con tu API Key de OpenWeatherMap
const city = 'Madrid'; // Puedes cambiar 'Madrid' por cualquier otra ciudad

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos meteorológicos:', data);
        console.log(`Temperatura en ${city}: ${data.main.temp}°C`);
        console.log(`Descripción: ${data.weather[0].description}`);
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error);
    });
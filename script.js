const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const iconElement = document.querySelector('.icon');
const descElement = document.querySelector('.description');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

// Weather data including Indian cities
const weatherData = {
    'mumbai': {
        temp: 32,
        humidity: 75,
        wind: 14,
        description: 'Humid and Sunny',
        icon: '☀️'
    },
    'delhi': {
        temp: 28,
        humidity: 45,
        wind: 18,
        description: 'Clear Sky',
        icon: '🌤️'
    },
    'bangalore': {
        temp: 26,
        humidity: 65,
        wind: 12,
        description: 'Pleasant',
        icon: '⛅'
    },
    'chennai': {
        temp: 30,
        humidity: 80,
        wind: 16,
        description: 'Partly Cloudy',
        icon: '☁️'
    },
    'kolkata': {
        temp: 29,
        humidity: 70,
        wind: 10,
        description: 'Scattered Clouds',
        icon: '🌥️'
    },
    'hyderabad': {
        temp: 27,
        humidity: 60,
        wind: 15,
        description: 'Mostly Clear',
        icon: '🌤️'
    },
    'london': {
        temp: 18,
        humidity: 65,
        wind: 12,
        description: 'Partly Cloudy',
        icon: '☁️'
    },
    'new york': {
        temp: 22,
        humidity: 55,
        wind: 8,
        description: 'Sunny',
        icon: '☀️'
    },
    'tokyo': {
        temp: 25,
        humidity: 70,
        wind: 15,
        description: 'Rainy',
        icon: '🌧️'
    },
    'paris': {
        temp: 20,
        humidity: 60,
        wind: 10,
        description: 'Clear Sky',
        icon: '🌤️'
    }
};

function updateWeather(city) {
    // Reset animations by removing and re-adding elements
    const weatherBox = document.querySelector('.weather-box');
    const clone = weatherBox.cloneNode(true);
    weatherBox.parentNode.replaceChild(clone, weatherBox);

    // Update references after DOM replacement
    const cityElement = document.querySelector('.city');
    const tempElement = document.querySelector('.temp');
    const iconElement = document.querySelector('.icon');
    const descElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    const cityData = weatherData[city.toLowerCase()];
    
    if (cityData) {
        cityElement.textContent = `Weather in ${city}`;
        tempElement.textContent = cityData.temp;
        iconElement.textContent = cityData.icon;
        descElement.textContent = cityData.description;
        humidityElement.textContent = `Humidity: ${cityData.humidity}%`;
        windElement.textContent = `Wind: ${cityData.wind} km/h`;
    } else {
        cityElement.textContent = 'City not found';
        tempElement.textContent = '--';
        iconElement.textContent = '❓';
        descElement.textContent = 'N/A';
        humidityElement.textContent = 'Humidity: --%';
        windElement.textContent = 'Wind: -- km/h';
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        updateWeather(city);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = searchInput.value.trim();
        if (city) {
            updateWeather(city);
        }
    }
});

// Initial weather display
updateWeather('mumbai');

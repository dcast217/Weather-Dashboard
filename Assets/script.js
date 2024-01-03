// Get DOM elements
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherContainer = document.getElementById('current-weather');
const forecastContainer = document.getElementById('forecast');
const searchHistoryList = document.getElementById('search-history');

// API key and base URL
const apiKey = '&appid=3faff0b0a3f87698026de9ce62920b41';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q=";

// Event listener for form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the value from the city input field
  const city = cityInput.value.trim();

  // Clear the input field
  cityInput.value = '';

  // Call the function to fetch weather data
  fetchWeather(city);
});

// Function to fetch weather data
function fetchWeather(city) {
  // Construct the API URL with the city and API key
  const url = `${apiUrl}${city}${apiKey}`;

  // Make the API call
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Display the current weather
      displayCurrentWeather(data.currentWeather);

      // Display the forecast
      displayForecast(data.forecast);

      // Update the search history
      updateSearchHistory(city);{
        console.log(data);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      // Handle error
    });
}

// Function to display current weather
function displayCurrentWeather(currentWeather) {
  // Clear the current weather container
  currentWeatherContainer.innerHTML = '';

  // Create elements for the current weather details
  const cityElement = document.createElement('h3');
  cityElement.textContent = currentWeather.city;

  const dateElement = document.createElement('p');
  dateElement.textContent = currentWeather.date;

  const iconElement = document.createElement('img');
  iconElement.src = currentWeather.icon;
  iconElement.alt = currentWeather.description;

  const temperatureElement = document.createElement('p');
  temperatureElement.textContent = `Temperature: ${currentWeather.temperature}°C`;

  const humidityElement = document.createElement('p');
  humidityElement.textContent = `Humidity: ${currentWeather.humidity}%`;

  const windElement = document.createElement('p');
  windElement.textContent = `Wind Speed: ${currentWeather.windSpeed} km/h`;

  // Append the elements to the current weather container
  currentWeatherContainer.appendChild(cityElement);
  currentWeatherContainer.appendChild(dateElement);
  currentWeatherContainer.appendChild(iconElement);
  currentWeatherContainer.appendChild(temperatureElement);
  currentWeatherContainer.appendChild(humidityElement);
  currentWeatherContainer.appendChild(windElement);
}

// Function to display forecast
function displayForecast(forecast) {
  // Clear the forecast container
  forecastContainer.innerHTML = '';

  // Loop through the forecast data and create elements for each day
  forecast.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('forecast-day');

    const dateElement = document.createElement('p');
    dateElement.textContent = day.date;

    const iconElement = document.createElement('img');
    iconElement.src = day.icon;
    iconElement.alt = day.description;

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${day.temperature}°C`;

    const windElement = document.createElement('p');
    windElement.textContent = `Wind Speed: ${day.windSpeed} km/h`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${day.humidity}%`;

    // Append the elements to the forecast container
    dayElement.appendChild(dateElement);
    dayElement.appendChild(iconElement);
    dayElement.appendChild(temperatureElement);
    dayElement.appendChild(windElement);
    dayElement.appendChild(humidityElement);

    forecastContainer.appendChild(dayElement);
    function displayForecast(forecastData) {
        if (forecastData && Array.isArray(forecastData)) {
          forecastData.forEach(function(forecast) {
            // Code to display each forecast
          });
        } else {
          console.log("Error: Invalid forecast data");
        }
      }
  });
}

// Function to update search history
function updateSearchHistory(city) {
  // Create a list item for the searched city
  const listItem = document.createElement('li');
  listItem.textContent = city;

  // Add event listener to the search history item
  listItem.addEventListener('click', function() {
    fetchWeather(city);
  });

  // Append the list item to the search history list
  searchHistoryList.appendChild(listItem);
}
function displayCurrentWeather(weatherData) {
    if (weatherData && weatherData.city) {
      // Access the 'city' property and display the weather data
      console.log("City: " + weatherData.city);
      // Rest of the code to display weather data
    } else {
      console.log("Error: Invalid weather data");
    }
  }
  function displayForecast(forecastData) {
    const forecastContainer = document.getElementById("forecast-container");
  
    if (forecastData && Array.isArray(forecastData)) {
      forecastData.forEach(function(forecast) {
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
  
        const dateElement = document.createElement("p");
        dateElement.textContent = "Date: " + forecast.date;
  
        const conditionsElement = document.createElement("p");
        conditionsElement.textContent = "Weather conditions: " + forecast.conditions;
  
        const temperatureElement = document.createElement("p");
        temperatureElement.textContent = "Temperature: " + forecast.temperature;
  
        const windSpeedElement = document.createElement("p");
        windSpeedElement.textContent = "Wind speed: " + forecast.windSpeed;
  
        const humidityElement = document.createElement("p");
        humidityElement.textContent = "Humidity: " + forecast.humidity;
  
        forecastItem.appendChild(dateElement);
        forecastItem.appendChild(conditionsElement);
        forecastItem.appendChild(temperatureElement);
        forecastItem.appendChild(windSpeedElement);
        forecastItem.appendChild(humidityElement);
  
        forecastContainer.appendChild(forecastItem);
      });
    } else {
      console.log("Error: Invalid forecast data");
    }
  }


// Get the city value from local storage
const cityJson = localStorage.getItem('city');
const cityObj = JSON.parse(cityJson);
const city = cityObj.city;

// Create a new list item to display the city
const listItem = document.createElement('li');
listItem.textContent = city;

// Find the search history ul element in the HTML
const searchHistory = document.getElementById('search-history');

// Append the list item to the search history
searchHistory.appendChild(listItem);

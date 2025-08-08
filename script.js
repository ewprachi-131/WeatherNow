function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');

  if (city === '') {
    alert("Please enter a city name!");
    return;
  }

  const API_KEY = 'enter your API Key';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

      const iconCode = data.weather[0].icon;
      document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

      resultDiv.classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
    });
}

// Toggle Dark/Light Mode
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
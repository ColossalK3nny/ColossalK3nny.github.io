// Az OpenWeatherMap API kulcsod
const apiKey = "17749da584123c62fde7fd69445a91f6";

// Város, amelynek az időjárását szeretnéd lekérdezni
const city = "Nyíregyháza";

// API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Egyedi ikonok hozzárendelése az időjárási típusokhoz
const iconMap = {
  Clear: "assets/icons/clear.png",
  Clouds: "assets/icons/clouds.png",
  Rain: "assets/icons/rain.png",
  Snow: "assets/icons/snow.png",
  Thunderstorm: "assets/icons/thunderstorm.png",
  Drizzle: "assets/icons/rain.png",
  Mist: "assets/icons/mist.png",
};

// Adatok lekérése az API-ból
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Az időjárási típus meghatározása
    const weatherType = data.weather[0].main;

    // A megfelelő ikon elérése az ikon térképből
    const weatherIcon = iconMap[weatherType] || "assets/icons/default.png";

    // Adatok megjelenítése ikonokkal
    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = `
      <h2>Current weather in ${data.name}</h2>
      <img src="${weatherIcon}" alt="${weatherType} Icon" style="width: 100px; height: 100px;" />
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>🌧️ Weather: ${data.weather[0].description}</p>
      <p>💨 Windspeed: ${data.wind.speed} m/s</p>
      <p>💧 Humidity: ${data.main.humidity} %</p>
    `;
  })
  .catch((error) => {
    console.error("Hiba történt az API-hívás során:", error);
  });

const API_URL =
    'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

// const API_KEY = 'YOUR_API_KEY';
const API_KEY = '593945b73075d0e483765bf464247958';

export async function getCurrentWeather(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const data = await response.json();

    return data;
}

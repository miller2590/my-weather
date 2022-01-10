import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API;
const api_url = "https://api.openweathermap.org/data/2.5/weather?";

async function getAllCurrent(location) {
  const response = await axios.get(api_url, {
    params: { appid: API_KEY, q: location, units: "imperial" },
  });
  return response;
}

export default getAllCurrent;

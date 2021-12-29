import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [temp, setTemp] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const city = "McHenry";
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  useEffect(() => {
    async function getData() {
      const response = await axios.get(api_url);
      setTemp(response.data.main.temp);
    }
    getData();
  }, [api_url, temp]);

  return <div>{temp}</div>;
}

export default Weather;

import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");

  const updateDescription = (response) => {
    setDescription(response.data.weather[0].description);
  };

  const updateTemp = (response) => {
    setTemp(response.data.main.temp);
  };

  return (
    <WeatherContext.Provider
      value={{ temp, updateTemp, description, updateDescription }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

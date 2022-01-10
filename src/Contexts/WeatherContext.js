import React, { createContext, useState } from "react";
import { apiData } from "../services/api/core";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");

  async function updateDescription(location) {
    let currentDescription = await apiData.getCurrentDescription(location);
    setDescription(currentDescription);
  }

  async function updateTemp(location) {
    let currentTemp = await apiData.getCurrentTemp(location);
    setTemp(currentTemp);
  }

  return (
    <WeatherContext.Provider
      value={{ temp, updateTemp, description, updateDescription }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

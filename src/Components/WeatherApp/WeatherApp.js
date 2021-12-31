import React, { useState } from "react";
import { Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherApp() {
  const [temp, setTemp] = useState("");

  return (
    <Paper sx={{ height: "100vh" }}>
      <Navbar />
      <WeatherCard temp={temp} setTemp={setTemp} />
    </Paper>
  );
}

export default WeatherApp;

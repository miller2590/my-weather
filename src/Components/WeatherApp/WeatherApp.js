import React from "react";
import { Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherProvider } from "../../Contexts/WeatherContext";

function WeatherApp() {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Navbar />
      <WeatherProvider>
        <WeatherCard />
      </WeatherProvider>
    </Paper>
  );
}

export default WeatherApp;

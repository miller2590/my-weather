import React from "react";
import { Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherApp() {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Navbar />
      <WeatherCard />
    </Paper>
  );
}

export default WeatherApp;

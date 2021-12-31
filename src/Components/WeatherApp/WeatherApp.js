import React, { useState } from "react";
import { Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherProvider } from "../../Contexts/WeatherContext";
import TempList from "../TempList/TempList";

function WeatherApp() {
  const [description, setDescription] = useState("");

  return (
    <Paper sx={{ height: "100vh" }}>
      <Navbar />
      <WeatherProvider>
        <WeatherCard
          description={description}
          setDescription={setDescription}
        />
      </WeatherProvider>
    </Paper>
  );
}

export default WeatherApp;

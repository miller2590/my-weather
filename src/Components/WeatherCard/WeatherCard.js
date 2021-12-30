import * as React from "react";
import { useState } from "react";
import useInputState from "../../hooks/useInputState";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

function WeatherCard() {
  const [value, handleChange, reset] = useInputState("");
  const [temp, setTemp] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API;
  let city = value;
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  async function getData() {
    const response = await axios.get(api_url);
    setTemp(response.data.main.temp);
    reset();
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <Grid item xs={11} md={8} lg={4}>
        <Card
          sx={{
            textAlign: "center",
          }}
        >
          <CardContent sx={{ flexDirection: "column" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "1rem" }}
            >
              Weather
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter City"
              variant="outlined"
              value={value}
              onChange={handleChange}
              sx={{ paddingBottom: "1rem" }}
            />
            <div>{temp} Degrees</div>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={getData}>
              Search
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;

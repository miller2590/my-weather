import * as React from "react";
import { useContext } from "react";
import axios from "axios";
import useInputState from "../../hooks/useInputState";
import { Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TempList from "../TempList/TempList";
import { WeatherContext } from "../../Contexts/WeatherContext";

function WeatherCard() {
  const [value, handleChange, reset] = useInputState("");
  const { updateTemp, updateDescription } = useContext(WeatherContext);

  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const api_url = "https://api.openweathermap.org/data/2.5/weather?";

  async function getData() {
    const response = await axios.get(api_url, {
      params: { appid: API_KEY, q: value, units: "imperial" },
    });
    await updateTemp(response);
    await updateDescription(response);
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getData();
            reset();
          }}
        >
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
                My Weather
              </Typography>
              <TextField
                id="outlined-basic"
                label="Enter City"
                variant="outlined"
                value={value}
                onChange={handleChange}
                sx={{ paddingBottom: "1rem" }}
                fullWidth
              />
              <div>
                <TempList />
              </div>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  getData();
                  reset();
                }}
              >
                Search
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;

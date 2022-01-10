import React from "react";
import { useContext } from "react";
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
            updateTemp(value);
            updateDescription(value);
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
                  updateTemp(value);
                  updateDescription(value);
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

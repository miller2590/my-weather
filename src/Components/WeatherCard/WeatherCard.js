import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

function WeatherCard() {
  console.log(process.env.REACT_APP_WEATHER_API);

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
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Search</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;

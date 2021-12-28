import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function WeatherCard() {
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
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Weather
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;

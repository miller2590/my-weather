import React, { useContext } from "react";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { Paper, List, ListItem, ListItemText } from "@mui/material";

function TempList() {
  const { temp, description } = useContext(WeatherContext);
  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemText>{temp}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>{description}</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default TempList;

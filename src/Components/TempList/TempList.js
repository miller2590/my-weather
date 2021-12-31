import React, { useContext } from "react";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

function TempList() {
  const { temp, description } = useContext(WeatherContext);
  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemText>{temp}</ListItemText>
        </ListItem>
        {temp && description ? <Divider /> : null}
        <ListItem>
          <ListItemText>{description}</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default TempList;

import React from "react";
import { Paper, List, ListItem, ListItemText } from "@mui/material";

function TempList({ temp }) {
  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemText>{temp} Degrees</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default TempList;

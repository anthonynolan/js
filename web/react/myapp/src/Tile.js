import { Grid, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import "./index.css";
function Tile(props) {
  const [pressed, setPressed] = useState(false);

  const styleTimer = () => {
    setPressed(true);
    setTimeout(setPressed, 500, false);
  };
  useEffect(() => {
    if (props.selected) {
      styleTimer();
    }
  }, []);

  return (
    <Grid item xs={12 / props.width}>
      <Paper elevation={pressed ? 0 : 10}>
        <Typography variant="h3" component="h1" onClick={styleTimer}>
          {"" + props.col}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Tile;

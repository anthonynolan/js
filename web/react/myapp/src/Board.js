import { Grid } from "@mui/material/";
import Tile from "./Tile";

function Board(props) {
  let content = [];

  for (let col = 0; col < props.width; col++) {
    content.push(
      <Tile
        selected={props.current == col}
        key={col}
        width={props.width}
        col={col}
      />
    );
  }

  return (
    <Grid container spacing={2}>
      {content}
    </Grid>
  );
}

export default Board;

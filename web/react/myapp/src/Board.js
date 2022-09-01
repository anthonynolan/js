import { Grid, Button, Container } from "@mui/material/";

const width = 3;
const height = 3;

function Board() {
  let content = [];

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      content.push(
        <Grid key={row * width + col} item xs={12 / width}>
          {/* <Paper elevation={5}>
            <Typography
              variant="h3"
              component="h1"
            >{`${row}, ${col}`}</Typography>
          </Paper> */}
          <Container>
            <Button variant="contained" size="large">
              {row}, {col}
            </Button>
          </Container>
        </Grid>
      );
    }
  }
  return (
    <Grid container spacing={2}>
      {content}
    </Grid>
  );
}

export default Board;

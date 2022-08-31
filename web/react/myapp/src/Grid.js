import { Grid, Button, Paper, Box, Container } from "@mui/material/";

function Grid2() {
  let content = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      content.push(
        <Grid key={row + col * 3} item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper elevation={5}>
              <Container>
                <Button variant="contained">{`${row}, ${col}`}</Button>
              </Container>
            </Paper>
          </Box>
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

export default Grid2;

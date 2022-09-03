import { Button, Container } from "@mui/material";
import { useState } from "react";
import Board from "./Board";
import "./index.css";

function App() {
  const [current, setCurrent] = useState(null);
  var turns = [];
  function gameloop() {
    const int = Math.floor(Math.random() * 4);
    turns.push(int);
    console.log(turns);
    setCurrent(int);
  }

  const width = 4;

  return (
    <Container>
      <Button onClick={gameloop}>Game</Button>
      <Board width={width} current={current} />
    </Container>
  );
}

export default App;

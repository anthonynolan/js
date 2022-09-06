import "../styles/index.css";
import Notepad from "../Components/Notepad";
import { useState } from "react";

function App() {
  const addNew = (x) => {
    const tmp = vals.slice();
    tmp.push({ value: x, date: new Date() });
    setVals(tmp);
  };

  const [vals, setVals] = useState([]);
  return (
    <div>
      <Notepad vals={vals} addNew={addNew} />
    </div>
  );
}

export default App;

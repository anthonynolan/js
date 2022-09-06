import { useState } from "react";
import EntryLog from "../Components/EntryLog";
import AlertBar from "../Components/AlertBar";

const Notepad = (props) => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");

  const alertClearer = () => {
    setAlert("");
  };
  const changeValue = (e) => {
    alertClearer();
    setValue(e.target.value);
  };
  const updateValue = () => {
    if (value.length === 0) {
      setAlert("You must enter some text to save");
      return;
    }
    props.addNew(value);
    setValue("");
  };

  return (
    <div>
      <div>
        <textarea rows="5" onChange={changeValue} value={value}></textarea>
      </div>
      <AlertBar value={alert} clearer={alertClearer} />
      <button onClick={updateValue}>Save</button>
      <EntryLog vals={props.vals} />
    </div>
  );
};
export default Notepad;

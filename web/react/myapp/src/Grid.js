import Button from "./Button";
function Grid() {
  return (
    <div>
      <div>
        <Button row="1" col="1" />
        <Button row="1" col="2" />
        <Button row="1" col="3" />
      </div>
      <div>
        <Button row="1" col="1" />
        <Button row="1" col="2" />
        <Button row="1" col="3" />
      </div>
    </div>
  );
}

export default Grid;

const AlertBar = (props) => {
  if (!props.value) {
    return <div></div>;
  }
  return (
    <div className="alert">
      <span>{props.value}</span>
      <button onClick={props.clearer}>Close</button>
    </div>
  );
};
export default AlertBar;

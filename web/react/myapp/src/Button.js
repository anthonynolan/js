import "./styles/Button.css";

function Button(props) {
  return <button>{`${props.row}, ${props.col}`}</button>;
}

export default Button;

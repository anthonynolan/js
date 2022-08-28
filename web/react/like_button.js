"use strict";

import { useState } from "react";

const e = React.createElement;

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);

  if (liked) {
    return "You liked this.";
  }

  return <button onClick={() => this.setState({ liked: true })}>Like</button>;
};

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

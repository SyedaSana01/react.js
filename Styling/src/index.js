import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <img src={img}></img>
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

const name = "Syeda Suhasana";
const lname = "khazi";
const luckynumber = 5;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${lname}`}</h1>
    <p> My lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);

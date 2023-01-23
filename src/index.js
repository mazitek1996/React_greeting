import React from "react";
import ReactDOM from "react-dom";

const name = "Mazitek";
const date = new Date();
const currentYear = date.getFullYear();
const currentTime = date.getHours();

let greetings;

if (currentTime < 12) {
  greetings = "good morning";
} else if (currentTime < 16) {
  greetings = "Good afternoon";
} else {
  greetings = "good evening";
}

ReactDOM.render(
  <div>
    <h1>
      {greetings} {`${name}`}
    </h1>
    <p>copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);

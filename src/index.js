import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

let randomNum = 0;

const handleRandomFunction = () => {
  console.log("testing");
  randomNum = Math.floor(Math.random() * 100);
};

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleRandomFunction} />
  </div>,
  document.getElementById("root")
);

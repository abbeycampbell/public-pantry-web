// what actually renders react app to the dom

import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";

ReactDOM.render(<App />,document.getElementById("render"))
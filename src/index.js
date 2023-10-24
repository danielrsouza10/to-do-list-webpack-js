import _ from "lodash";

import menuBar from "./components/menuBar/menuBar";
import sideBar from "./components/sideBar/sideBar";

import "./style.css";

const content = document.querySelector(".content");

function component() {
  const element = document.createElement("h1");

  element.innerHTML = _.join(["hello", "webpack"], " ");

  return element;
}

content.appendChild(menuBar());
content.appendChild(sideBar());
content.appendChild(component());

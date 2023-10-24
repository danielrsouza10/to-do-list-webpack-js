import "./sideBarStyle.css";

import newProjectList from "./components/newProjectList";
import component from "../../index";

const sideBarContent = document.createElement("div");
sideBarContent.appendChild(newProjectList());

function sideBar() {
  const sideBarComponent = document.createElement("div");

  sideBarComponent.innerHTML = `
    <div class="side-bar__content">
        <div class="side-bar__container">
            <h1>Workspace</h1>
            <div class="main-workspace">Main Workspace</div>
        </div>
    </div>
  `;

  sideBarContent.appendChild(sideBarComponent);

  return sideBarContent;
}

export default sideBar;

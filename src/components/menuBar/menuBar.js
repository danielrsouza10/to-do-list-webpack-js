import "./menuBarStyle.css";

function menuBar() {
  const menuComponent = document.createElement("p");

  menuComponent.innerHTML = `
  <h1>menu-bar works</h1>
  <div>And this return too</div>
  `;

  return menuComponent;
}

export default menuBar;

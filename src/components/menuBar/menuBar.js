import "./menuBarStyle.css";

function menuBar() {
  const menuComponent = document.createElement("div");

  menuComponent.innerHTML = `
  <div class="menu-bar__content">
    <div class="menu-bar__top">
      <div class="menu-bar__brand">
        <span class="material-symbols-outlined">app_badging</span>
      </div>
      <div class="menu-bar__icons">
        <span class="material-symbols-outlined">grid_view</span>
        <span class="material-symbols-outlined">task_alt</span>
        <span class="material-symbols-outlined">chat</span>
        <span class="material-symbols-outlined">settings</span>
      </div>
    </div>
    <div class="menu-bar__bottom">
      <span class="material-symbols-outlined">logout</span>  
    </div>
  
  </div>
  

  `;

  return menuComponent;
}

export default menuBar;

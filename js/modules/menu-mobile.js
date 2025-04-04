import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["touchstart", "click"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    eventos.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
}

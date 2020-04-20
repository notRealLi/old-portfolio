const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const menuProfile = document.querySelector(".menu-profile");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// initial state of menu
let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("closed");
    menu.classList.add("show");
    menuProfile.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuButton.classList.remove("closed");
    menu.classList.remove("show");
    menuProfile.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}

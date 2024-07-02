function openNav() {
  document.getElementById("sidenav").classList.add("open-section");
  document
    .getElementById("sidemenu-overlay")
    .classList.add("sidemenu-overlay-open");
}

function closeNav() {
  document.getElementById("sidenav").classList.remove("open-section");
  document
    .getElementById("sidemenu-overlay")
    .classList.remove("sidemenu-overlay-open");
}
const mobileMenu = document.getElementById("mobileMenu");
const menuToggler = document.getElementById("menuToggler");

menuToggler.addEventListener("click", (e) => {
  console.log("Menu toggled");
  mobileMenu.classList.toggle("show");
});

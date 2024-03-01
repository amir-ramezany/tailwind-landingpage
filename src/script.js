const btn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

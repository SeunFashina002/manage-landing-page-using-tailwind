const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.onclick = () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
};

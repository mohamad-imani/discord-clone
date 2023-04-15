const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close");
const darken = document.getElementById("darken");
const lang = document.getElementById("lang");
const langList = document.getElementById("lang-list");

burger.addEventListener("click", () => {
  burgerMenu.classList.remove("-right-80");
  burgerMenu.classList.add("right-0");
  darken.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  burgerMenu.classList.remove('right-0')
  burgerMenu.classList.add("-right-80");
  darken.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

lang.addEventListener("click", () => {
  langList.classList.toggle("hidden");
});

AOS.init({
  duration: 1200,
})

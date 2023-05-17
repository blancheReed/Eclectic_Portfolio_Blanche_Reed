const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", () => {
  mobileNav.classList.toggle("display-none");
});

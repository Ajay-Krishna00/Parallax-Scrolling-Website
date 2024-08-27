window.onscroll = () => {
  document.querySelector(".stars").style.transform =
    "scale(" + (500 - scrollY) / 500 + ")";

  document.querySelector(".asteroids").style.transform =
    "scale(" + (1400 - scrollY) / 1400 + ")";

  document.querySelector(".planets").style.transform =
    "scale(" + (3000 - scrollY) / 3000 + ")";

  document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";

  document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

  makeNavbarSticky();
};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function makeNavbarSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/*
document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = () => {
    let scrollY = window.scrollY; // This line retrieves the number of pixels the document has already been scrolled vertically

    let stars = document.querySelector(".stars"); //This line selects the first element in the document with the class name stars and assigns it to the stars variable. If no element is found, stars will be null.
    let asteroids = document.querySelector(".asteroids");
    let planets = document.querySelector(".planets");
    let homeTitle = document.querySelector(".Home h1");

    if (stars) {
      let starsScale = Math.max((500 - scrollY) / 500, 0.1);
      stars.style.transform = "scale(" + starsScale + ")";
    }

    if (asteroids) {
      let asteroidsScale = Math.max((1400 - scrollY) / 1400, 0.1);
      asteroids.style.transform = "scale(" + asteroidsScale + ")";
    }

    if (planets) {
      let planetsScale = Math.max((3000 - scrollY) / 3000, 0.1);
      planets.style.transform = "scale(" + planetsScale + ")";
    }

    if (homeTitle) {
      homeTitle.style.marginTop = Math.min(scrollY / 1.3, 300) + "px";
      homeTitle.style.opacity = Math.max((80 - scrollY) / 80, 0);
    }
  };
});
*/

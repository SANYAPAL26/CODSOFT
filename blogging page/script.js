// toggle nav bar
const toggleButton = document.getElementsByClassName("hamburger-line")[0];
let showX = false;
const ul = document.getElementById("navbar-ul");

toggleButton.addEventListener("click", (e) => {
  ul.classList.toggle("add-height");
  document.body.classList.toggle("overflow");
});

// resize listener
window.addEventListener("resize", (e) => {
  console.log("resized");
  if (window.innerWidth < 541) {
    ul.classList.remove("add-height");
    document.body.classList.remove("overflow");
  }
});

//onclick on links for scroll event

// top: rect.top + window.scrollY;

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    console.log(id);

    const scrollToElement = document.querySelector(id);
    console.log(scrollToElement);
    const scrollToElementTop = scrollToElement.offsetTop;
    console.log(scrollToElementTop);

    const navBar = document.querySelector("nav");
    navBarHeight = navBar.getBoundingClientRect().height;
    if (ul.classList.contains("add-height")) {
      const navBarHeight = document
        .getElementsByClassName("top")[0]
        .getBoundingClientRect().height;
      console.log(navBarHeight);
      console.log(scrollToElementTop - navBarHeight);
      window.scrollTo({
        top: scrollToElementTop - navBarHeight,
        behavior: "smooth",
      });
    } else {
      console.log(scrollToElementTop - navBarHeight);
      window.scrollTo({
        top: scrollToElementTop - navBarHeight,
        behavior: "smooth",
      });
    }
    ul.classList.remove("add-height");
    document.body.classList.remove("overflow");
  });
});

//pratise

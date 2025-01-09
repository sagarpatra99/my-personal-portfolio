function toggleMode() {
  document.body.classList.toggle("dark");
  const button = document.getElementById("mode-toggle");
  if (document.body.classList.contains("dark")) {
    button.textContent = "Light";
  } else {
    button.textContent = "Dark";
  }
}

// read more

function myFunction() {
  let dots = document.querySelector(".dot");
  let moreText = document.querySelector(".more-text");
  let btn = document.querySelector("#more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

// #####################################################

let links = document.querySelector("#myLinks");
let input_check = document.querySelector("#check");

var typed = new Typed("#typed-element", {
  strings: [
    "Front-end Developer",
    "JavaScript Developer",
    "React.js Developer",
    "Web Developer",
  ],
  typeSpeed: 70,
  deleteSpeed: 50,
  delaySpeed: 1000,
  backSpeed: 70,
  // backDelay: 500,
  // startDelay: 1000,
  loop: true,
});

// ###############################################################################
// ###############################################################################

// // Check user preference or default to light mode
// const userPrefersDark = window.matchMedia(
//   "(prefers-color-scheme: dark)"
// ).matches;
// const rootElement = document.documentElement;

// if (userPrefersDark) {
//   rootElement.classList.add("dark");
// } else {
//   rootElement.classList.remove("dark");
// }

// // Toggle dark mode manually
// const toggleDarkMode = () => {
//   rootElement.classList.toggle("dark");
// };

// // Example: Attach to a button click
// document
//   .getElementById("dark-mode-toggle")
//   .addEventListener("click", toggleDarkMode);

// ###############################################################################
// ###############################################################################

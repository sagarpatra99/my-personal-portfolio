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

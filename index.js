function generatePoem(event) {
  event.preventDefault;

  alert("generating poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

//utils

function addEventListenerToArray(array, eventType, func) {
  for (let item of array) {
    item.addEventListener(eventType, func);
  }
}

// 6

function setElementBorder(event) {
  const button = event.target;
  const imgContainer = document.getElementById("meme-image-container");
  imgContainer.className = button.classList[1];
}

// 4

function handleFiles(files) {
  if (files.length) {
    const imgContainer = document.getElementById("meme-image-container");
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 500;
    img.width = 900;
    img.id = "meme-image";
    img.onload = function(e) {
      window.URL.revokeObjectURL(this.src);
    }
    imgContainer.appendChild(img);
  }
}

function setMemeImage(event) {
  const inputElement = event.target;
  const inputFiles = inputElement.files;
  handleFiles(inputFiles);
}

// 1
function setMemeText(event) {
  const textInput = event.target;
  const memeText = document.getElementById("meme-text");
  memeText.innerText = textInput.value;
}

function startEventListeners() {
  const textInput = document.getElementById("text-input");
  textInput.addEventListener("keyup", setMemeText)
  const imageInput = document.getElementById("meme-insert");
  imageInput.addEventListener("change", setMemeImage);
  const elementButtons = document.getElementsByClassName("button");
  addEventListenerToArray(elementButtons, "click", setElementBorder)
}



window.onload = function () {
  startEventListeners()
}
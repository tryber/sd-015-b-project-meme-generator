//utils

function addEventListenerToArray(array, eventType, func) {
  for (let item of array) {
    item.addEventListener(eventType, func);
  }
}

// 7

function createPreMadeImages() {
  const preMadeImagesContainer = document.querySelector('.pre-made-images-container')
  for (let index = 1; index <= 4; index += 1) {
    img = document.createElement('img');
    img.width = 200;
    img.height = 200;
    img.src = `./imgs/meme${index}.png`;
    img.id = `meme-${index}`;
    img.className = 'pre-made-image';
    preMadeImagesContainer.appendChild(img);
  }
}

function selectPreMadeImage(event) {
  const actualImg = document.getElementById('meme-image')
  const preMadeImg = event.target;
  const preMadeImgSrc = preMadeImg.src;
  if (actualImg) {
    actualImg.src = preMadeImgSrc;
  } else {
    const imgContainer =  document.getElementById('meme-image-container');
    newImg = document.createElement('img');
    newImg.height = 500;
    newImg.width = 900;
    newImg.id = 'meme-image';
    newImg.src = preMadeImgSrc;
    imgContainer.appendChild(newImg);
  }
}

// 6

function setElementBorder(event) {
  const button = event.target;
  const imgContainer = document.getElementById('meme-image-container');
  imgContainer.className = button.classList[1];
}

// 4

function handleFiles(files) {
  if (files.length) {
    const imgContainer = document.getElementById('meme-image-container');
    let img = document.createElement('img');
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 500;
    img.width = 900;
    img.id = 'meme-image';
    img.onload = function(e) {
      window.URL.revokeObjectURL(this.src);
    }
    imgContainer.appendChild(img);
  }
}

function setMemeImage(event) {
  let actualImg = document.getElementById('meme-image');
  if (actualImg) {
    actualImg.remove()
    const inputElement = event.target;
    const inputFiles = inputElement.files;
    handleFiles(inputFiles);
  } else {
    const inputElement = event.target;
    const inputFiles = inputElement.files;
    handleFiles(inputFiles);
  }
}

// 1
function setMemeText(event) {
  const textInput = event.target;
  const memeText = document.getElementById('meme-text');
  memeText.innerText = textInput.value;
}

function startEventListeners() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keyup', setMemeText);
  const imageInput = document.getElementById('meme-insert');
  imageInput.addEventListener('change', setMemeImage);
  const elementButtons = document.getElementsByClassName('button');
  addEventListenerToArray(elementButtons, 'click', setElementBorder)
  const preMadeImages = document.getElementsByClassName('pre-made-image');
  addEventListenerToArray(preMadeImages, 'click', selectPreMadeImage);
}



window.onload = function () {
  createPreMadeImages();
  startEventListeners();
}
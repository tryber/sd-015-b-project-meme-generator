const body = document.querySelector('body');
const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const images = Array.from(document.getElementById('images').children);

function addText() {
  const inputValue = textInput.value;
  memeText.innerHTML = inputValue;
}
textInput.addEventListener('keyup', addText);

// Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
// Source: https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
function addImage(image) {
  memeImage.src = image;
  memeImage.style.height = '100%';
  memeImage.style.width = '100%';
}

// Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function getImageInput() {
  const selectedImage = imageInput.files[0];
  const urlObject = URL.createObjectURL(selectedImage);
  if (selectedImage) {
    addImage(urlObject);
  }
}
imageInput.addEventListener('change', getImageInput);

function setFire(backgroundColor) {
  const borderImageContainer = `3px dashed ${backgroundColor}`;
  memeImageContainer.style.setProperty('border', borderImageContainer);
}

function setWater(backgroundColor) {
  const borderImageContainer = `5px double ${backgroundColor}`;
  memeImageContainer.style.setProperty('border', borderImageContainer);
}

function setEarth(backgroundColor) {
  const borderImageContainer = `6px groove ${backgroundColor}`;
  memeImageContainer.style.setProperty('border', borderImageContainer);
}

function checkButton(originEvent) {
  const buttonPressed = originEvent.target;
  const stringBackground = 'background-color';
  if (buttonPressed.id === 'fire') {
    const buttonProperties = getComputedStyle(buttonPressed);
    const backgroundColor = buttonProperties.getPropertyValue(stringBackground);
    setFire(backgroundColor);
  } else if (buttonPressed.id === 'water') {
    const buttonProperties = getComputedStyle(buttonPressed);
    const backgroundColor = buttonProperties.getPropertyValue(stringBackground);
    setWater(backgroundColor);
  } else if (buttonPressed.id === 'earth') {
    const buttonProperties = getComputedStyle(buttonPressed);
    const backgroundColor = buttonProperties.getPropertyValue(stringBackground);
    setEarth(backgroundColor);
  }
}
body.addEventListener('click', checkButton);

function addToContainer(originEvent) {
  const selectedImage = originEvent.target.src;
  addImage(selectedImage);
}
for (let counter = 0; counter < images.length; counter += 1) {
  images[counter].addEventListener('click', addToContainer);
}

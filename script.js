const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

function addText() {
  const inputValue = textInput.value;
  memeText.innerHTML = inputValue;
}
textInput.addEventListener('keyup', addText);

// Source: https://stackoverflow.com/questions/49942611/how-to-display-a-photo-uploaded-by-user-in-html-and-javascript
// Source: https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
function addImage(image) {
  const reader = new FileReader();
  // when read operation is finished, onload is triggered, and file is represented as base64 encoded string
  reader.readAsDataURL(image);
  reader.onload = function setSource(originEvent) {
    memeImage.style.height = '100%';
    memeImage.style.width = '100%';
    memeImage.src = originEvent.target.result;
  };
}

// Source: https://betterprogramming.pub/handling-file-inputs-with-javascript-9f2d3a007f05
function getImageInput() {
  const selectedImage = imageInput.files[0];
  if (selectedImage) {
    addImage(selectedImage);
  }
}
imageInput.addEventListener('change', getImageInput);

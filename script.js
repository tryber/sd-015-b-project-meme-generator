const memeImageContainer = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const chooseFile = document.querySelector("#meme-insert")



function addText() {
  const textValue = textInput.value;
  memeText.innerText = textValue;
}

textInput.addEventListener('keyup', addText);

function addImage() {
    const uploadedImage = chooseFile.files;
    const createImage = document.querySelector('#meme-image');
    createImage.src = URL.createObjectURL(uploadedImage[0]);
  }
  
  chooseFile.addEventListener('change', addImage);
const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');

function createTextContainer() {
  const memeText = document.createElement('p');

  memeText.id = 'meme-text';

  memeContainer.appendChild(memeText);
}

function addTexttoMeme() {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', addTexttoMeme);

const imageInput = document.getElementById('meme-insert');

function addImagetoMeme() {
  const uploadedImage = imageInput.files[0];
  const memeImage = document.createElement('img');

  memeImage.id = 'meme-image';
  memeImage.src = URL.createObjectURL(uploadedImage);
  memeContainer.appendChild(memeImage);
}

imageInput.addEventListener('change', addImagetoMeme);

window.onload = () => {
  createTextContainer();

}

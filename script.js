const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function addTexttoMeme() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', addTexttoMeme);

const imageInput = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');

function addImagetoMeme() {
  const uploadedImage = imageInput.files[0];
  const memeImage = document.createElement('img');

  memeImage.id = 'meme-image';
  memeImage.src = URL.createObjectURL(uploadedImage);
  memeContainer.appendChild(memeImage);
}

imageInput.addEventListener('change', addImagetoMeme);

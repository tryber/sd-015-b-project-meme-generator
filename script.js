const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');

function textCreate() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', textCreate);

const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
//const memeImageContainer = document.getElementById('meme-image-container');

textInput.addEventListener('input', textoDoImput);

function textoDoImput(event) {
  memeText.innerText = event.target.value;
}

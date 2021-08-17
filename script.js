const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('input', writeInContainer);

function writeInContainer(event) {
  memeText.innerText = event.target.value;
}

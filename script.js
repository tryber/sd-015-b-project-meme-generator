localStorage.clear();

const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
console.log(textInput, memeText);

function addTexttoMeme() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', addTexttoMeme);

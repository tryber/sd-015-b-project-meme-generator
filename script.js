const textInput = document.getElementById('text-input');
const textContainer = document.getElementById('meme-text');

const textMeme = () => textContainer.innerText = textInput.value;

textInput.addEventListener('keyup', textMeme)
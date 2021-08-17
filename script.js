const input = document.getElementById('text-input');
const addTextBtn = document.getElementById('add-text');
const memeText = document.getElementById('meme-text');

function addText() {
  const inputValue = input.value;
  memeText.innerHTML = inputValue;
}
input.addEventListener('keyup', addText)
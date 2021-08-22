const input = document.getElementById('text-input');
const p = document.getElementById('meme-text');

function textInput() {
  const inputValue = input.value;
  p.innerText = inputValue;
}

input.addEventListener('keyup', textInput);

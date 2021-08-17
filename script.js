const input = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');

input.addEventListener("keyup",insertText)

function insertText() {
textMeme.innerText = input.value;
}
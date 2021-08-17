const buttonGeneratorText = document.getElementById('generateTextMeme');
const input = document.getElementById('text-input');

buttonGeneratorText.addEventListener('click', addText);

function addText() {
  const tagText = document.getElementById('meme-text');
  tagText.innerText = input.value;
}
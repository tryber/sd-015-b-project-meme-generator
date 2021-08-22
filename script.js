const imgContainer = document.getElementById('meme-image-container');
const inputText = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');

function textMemeOnPage() {
  const textValue = inputText.value;
  textMeme.innerText = textValue;
}

inputText.addEventListener('keyup', textMemeOnPage);

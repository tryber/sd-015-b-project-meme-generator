window.onload = function pageInit() {
  inputTextMemePaste();
  inputTextMemeKeyPress();
}

function textMeme(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  const memeText = document.getElementById('meme-text');
  memeText.innerText = paste;
}

function textMemeKeyPress(event) {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = event.target.value + event.key;
}

function inputTextMemePaste() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('paste', textMeme);
}

function inputTextMemeKeyPress() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keypress', textMemeKeyPress);
}

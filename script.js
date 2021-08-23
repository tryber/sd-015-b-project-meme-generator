function textMeme(event) {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  const memeText = document.getElementById('meme-text');
  memeText.innerText = paste;
}

function textMemeKeyPress(event) {
  const memeText = document.getElementById('meme-text');
  if (event.key === 'Enter') {
    memeText.innerText = event.target.value;
  } else {
    memeText.innerText = event.target.value + event.key;
  }
}

function inputTextMemePaste() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('paste', textMeme);
}

function inputTextMemeKeyPress() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keypress', textMemeKeyPress);
}

function getImageFile() {
  const file = document.getElementById('meme-insert').files;
  const memeImage = document.getElementById('meme-image');
  if (file.length > 0) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const event = ev;
      memeImage.setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file[0]);
  }
}

function inputGetImageFile() {
  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', getImageFile);
}

// window.onload = function pageInit() {
  inputTextMemePaste();
  inputTextMemeKeyPress();
  inputGetImageFile();
// };

function textMeme(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
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

function getImageFile(event) {
  const file = event.target.files[0];
  let reader = new FileReader();
  const memeImage = document.getElementById('meme-image');
  memeImage.accept = 'image/jpeg, image/png';
  reader.onload = function() {
    memeImage.src = reader.result;
  }
  if (file) {
    reader.readAsDataURL(file);
    console.log(reader);
  } else {
      memeImage.src = '';
  }
}

function inputGetImageFile() {
  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', getImageFile);
}

window.onload = function pageInit() {
  inputTextMemePaste();
  inputTextMemeKeyPress();
  inputGetImageFile();
}

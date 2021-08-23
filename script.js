function textMeme(event) {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  const memeText = document.getElementById('meme-text');
  memeText.innerText = paste;
}

function inputTextMemePaste() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('paste', textMeme);
}

function textMemeKeyPress(event) {
  const memeText = document.getElementById('meme-text');
  if (event.target.value.length < 60) {
    if (event.key === 'Enter') {
      memeText.innerText = event.target.value;
    } else {
      memeText.innerText = event.target.value + event.key;
    }
  }
}

function inputTextMemeKeyPress() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keypress', textMemeKeyPress);
}

function getImageFile() {
  const file = document.getElementById('meme-insert').files;
  const memeImage = document.getElementById('meme-image');
  memeImage.style.width = '100%';
  memeImage.style.height = '100%';
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

function changeToFire() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = '3px dashed red';
}

function borderFire() {
  const fire = document.getElementById('fire');
  fire.style.backgroundColor = 'red';
  fire.addEventListener('click', changeToFire);
}

function changeToWater() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = '5px double blue';
}

function borderWater() {
  const water = document.getElementById('water');
  water.style.backgroundColor = 'blue';
  water.addEventListener('click', changeToWater);
}

function changeToEarth() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = '6px groove green';
}

function borderEarth() {
  const earth = document.getElementById('earth');
  earth.style.backgroundColor = 'green';
  earth.addEventListener('click', changeToEarth);
}

window.onload = function pageInit() {
  inputTextMemePaste();
  inputTextMemeKeyPress();
  inputGetImageFile();
  borderFire();
  borderWater();
  borderEarth();
};

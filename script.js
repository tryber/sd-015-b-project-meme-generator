const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function textMeme(event) {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  memeText.innerText = paste;
}

function inputTextMemePaste() {
  textInput.addEventListener('paste', textMeme);
}

function textMemeKeyPress(event) {
  if (event.target.value.length < 60) {
    if (event.key === 'Enter') {
      memeText.innerText = event.target.value;
    } else {
      memeText.innerText = event.target.value + event.key;
    }
  }
}

function inputTextMemeKeyPress() {
  textInput.addEventListener('keypress', textMemeKeyPress);
}

function getImageFile() {
  const file = memeInsert.files;
  if (file.length > 0) {
    const reader = new FileReader();
    reader.onload = function upload(e) {
      const output = e;
      memeImage.setAttribute('src', output.target.result);
    };
    reader.readAsDataURL(memeInsert.files[0]);
  }
}

function inputGetImageFile() {
  memeInsert.addEventListener('change', getImageFile);
}

function changeToFire() {
  memeImageContainer.style.border = '3px dashed red';
}

function borderFire() {
  fire.style.backgroundColor = 'red';
  fire.addEventListener('click', changeToFire);
}

function changeToWater() {
  memeImageContainer.style.border = '5px double blue';
}

function borderWater() {
  water.style.backgroundColor = 'blue';
  water.addEventListener('click', changeToWater);
}

function changeToEarth() {
  memeImageContainer.style.border = '6px groove green';
}

function borderEarth() {
  earth.style.backgroundColor = 'green';
  earth.addEventListener('click', changeToEarth);
}

function changeMeme1() {
  memeImage.src = meme1.src;
}

function imgChangeMeme1() {
  meme1.addEventListener('click', changeMeme1);
}

function changeMeme2() {
  memeImage.src = meme2.src;
}

function imgChangeMeme2() {
  meme2.addEventListener('click', changeMeme2);
}

function changeMeme3() {
  memeImage.src = meme3.src;
}

function imgChangeMeme3() {
  meme3.addEventListener('click', changeMeme3);
}

function changeMeme4() {
  memeImage.src = meme4.src;
}

function imgChangeMeme4() {
  meme4.addEventListener('click', changeMeme4);
}

window.onload = function pageInit() {
  inputTextMemePaste();
  inputTextMemeKeyPress();
  inputGetImageFile();
  borderFire();
  borderWater();
  borderEarth();
  imgChangeMeme1();
  imgChangeMeme2();
  imgChangeMeme3();
  imgChangeMeme4();
};

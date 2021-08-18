const input = document.querySelector('input');
const textContainer = document.querySelector('#meme-text');
const uploadBtn = document.getElementById('meme-insert');
const meme = document.querySelector('img');

function getText() {
  textContainer.innerHTML = input.value;
}

input.addEventListener('keyup', getText);

function uploadImg(event) {
  const src = URL.createObjectURL(event.target.files[0]);
  meme.src = src;
}

uploadBtn.addEventListener('change', uploadImg);

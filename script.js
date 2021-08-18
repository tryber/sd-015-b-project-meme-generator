const input = document.querySelector('input');
const textContainer = document.querySelector('#meme-text');
const uploadBtn = document.getElementById('meme-insert');
const meme = document.querySelector('img');
const memeContainer = document.getElementById('meme-image-container');
const btnContainer = document.getElementById('btn-container');
// const fireBtn = document.getElementById('fire');
// const waterBtn = document.getElementById('water');
// const earthBtn = document.getElementById('earth');

function getText() {
  textContainer.innerHTML = input.value;
}

input.addEventListener('keyup', getText);

function uploadImg(event) {
  const src = URL.createObjectURL(event.target.files[0]);
  meme.src = src;
}

uploadBtn.addEventListener('change', uploadImg);

memeContainer.style.border = 'solid 1px black';

function changeBorder(event) {
  const btn = event.target;
  if (btn.innerText === 'Verde') {
    memeContainer.style.border = 'groove 6px green';
  } else if (btn.innerText === 'Vermelho') {
    memeContainer.style.border = 'dashed 3px red';
  } else {
    memeContainer.style.border = 'double 5px blue';
  }
}

btnContainer.addEventListener('click', changeBorder);

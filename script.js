const input = document.querySelector('input');
const textContainer = document.querySelector('#meme-text');
const uploadBtn = document.getElementById('meme-insert');
const meme = document.querySelector('img');
const memeContainer = document.getElementById('meme-image-container');
const btnContainer = document.getElementById('btn-container');
const temp1 = document.getElementById('meme-1');
const temp2 = document.getElementById('meme-2');
const temp3 = document.getElementById('meme-3');
const temp4 = document.getElementById('meme-4');

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

function loadTemplate(event) {
  const img = event.target;
  meme.src = img.src;
}

temp1.addEventListener('click', loadTemplate);
temp2.addEventListener('click', loadTemplate);
temp3.addEventListener('click', loadTemplate);
temp4.addEventListener('click', loadTemplate);

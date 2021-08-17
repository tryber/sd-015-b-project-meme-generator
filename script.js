const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const textMeme = document.getElementById('meme-text');
const conteinerMeme = document.getElementById('meme-image-container');
const selectMeme1 = document.getElementById('meme-1');
const selectMeme2 = document.getElementById('meme-2');
const selectMeme3 = document.getElementById('meme-3');
const selectMeme4 = document.getElementById('meme-4');

function insertText() {
  textMeme.innerText = inputText.value;
}

function removeImage(value) {
  const id = value;
  if (document.getElementById(id)) {
    document.getElementById(id).remove();
  }
}

function insertImage() {
  const id = 'meme-image';
  removeImage(id);
  if (inputImage.files.length === 1) {
    const img = document.createElement('img');
    img.id = id;
    img.src = URL.createObjectURL(inputImage.files[0]);
    conteinerMeme.appendChild(img);
  } else {
    alert('Só é possível selecionar apenas uma imagem');
  }
}

function changeBorder(element) {
  const buttonReference = element.target;

  if (buttonReference.id === 'fire') {
    conteinerMeme.style.border = '3px dashed red';
  } else if (buttonReference.id === 'water') {
    conteinerMeme.style.border = '5px double blue';
  } else if (buttonReference.id === 'earth') {
    conteinerMeme.style.border = '6px groove green';
  }
}

function switching(element, image) {
  const preElement = element;
  const img = image;
  switch (preElement) {
  case 'meme1':
    conteinerMeme.appendChild(img);
    break;
  case 'meme2':
    conteinerMeme.appendChild(img);
    break;
  case 'meme3':
    conteinerMeme.appendChild(img);
    break;
  case 'meme4':
    conteinerMeme.appendChild(img);
    break;
  default:
  }
}

function preMolded(element) {
  const preElement = element.target.id;
  const id = 'meme-image';
  const img = document.createElement('img');
  img.id = id;
  img.src = `./imgs/${preElement}.png`;
  removeImage(id);
  switching(preElement, img);
}

inputText.addEventListener('keyup', insertText);
inputImage.addEventListener('change', insertImage);
fireButton.addEventListener('click', changeBorder);
waterButton.addEventListener('click', changeBorder);
earthButton.addEventListener('click', changeBorder);
selectMeme1.addEventListener('click', preMolded);
selectMeme2.addEventListener('click', preMolded);
selectMeme3.addEventListener('click', preMolded);
selectMeme4.addEventListener('click', preMolded);

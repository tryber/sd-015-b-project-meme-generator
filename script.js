const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const textMeme = document.getElementById('meme-text');
const conteinerMeme = document.getElementById('meme-image-container');

function insertText() {
  textMeme.innerText = inputText.value;
}

function insertImage() {
  if (document.getElementById('meme-image')) {
    document.getElementById('meme-image').remove();
  }
  if (inputImage.files.length === 1) {
    const img = document.createElement('img');
    img.id = 'meme-image';
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

inputText.addEventListener('keyup', insertText);
inputImage.addEventListener('change', insertImage);
fireButton.addEventListener('click', changeBorder);
waterButton.addEventListener('click', changeBorder);
earthButton.addEventListener('click', changeBorder);

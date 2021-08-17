const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const textMeme = document.getElementById('meme-text');
const conteinerMeme = document.getElementById('meme-image-container');

function insertText() {
  textMeme.innerText = inputText.value;
}

function insertImage() {
  if (inputImage.files.length === 1) {
    const img = document.createElement('img');
    img.id = 'meme-image';
    img.src = URL.createObjectURL(inputImage.files[0]);
    conteinerMeme.appendChild(img);
  } else {
    alert('Só é possível selecionar apenas uma imagem');
  }
}

inputText.addEventListener('keyup', insertText);
inputImage.addEventListener('change', insertImage);

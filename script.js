const textArea = document.getElementById('meme-text');
const textImput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');

// cria texto na para o meme
function mostraTexto() {
  textArea.innerText = textImput.value;
}
textImput.addEventListener('keyup', mostraTexto);

// adiciona imagem
function insertMemeImage() {
  const img = memeInsert.files;
  const createImage = document.querySelector('#meme-image');
  createImage.src = URL.createObjectURL(img[0]);
}

memeInsert.addEventListener('change', insertMemeImage);

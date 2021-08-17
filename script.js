const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const fire = document.getElementById('fire');
const memeImageContainer = document.getElementById('meme-image-container');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeImage = document.getElementById('meme-image');
const colecaoMemes = document.getElementById('bibliotecaDeMemes')

fire.addEventListener('click', colocaFogo);
water.addEventListener('click', jogarAgua);
earth.addEventListener('click', mapaMundo);
textInput.addEventListener('input', textoDoImput);
colecaoMemes.addEventListener('click', openMeme);

function textoDoImput(event) {
  memeText.innerText = event.target.value;
}

window.addEventListener('load', function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener('change', function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});

function toLimit(string = '') {
  string.value = string.value.substring(0, 60);
}

function colocaFogo() {
  memeImageContainer.style.border = '3px dashed red';
}

function jogarAgua() {
  memeImageContainer.style.border = '5px double blue';
}
function mapaMundo() {
  memeImageContainer.style.border = '6px groove green';
}
function openMeme(event) {
  memeImage.src = event.target.src;
}
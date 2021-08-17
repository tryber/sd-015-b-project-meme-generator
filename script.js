const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeImageContainer = document.getElementById('meme-image-container');
const memeCollection = document.getElementById('meme-collection');
const memeImage = document.getElementById('meme-image');

function writeInContainer(event) {
  memeText.innerText = event.target.value;
}

window.addEventListener('load', () => {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    const image = document.querySelector('img');
    if (this.files && this.files[0]) {
      image.onload = () => {
        URL.revokeObjectURL(image.src);
      };
      image.src = URL.createObjectURL(this.files[0]);
    }
  });
});
// função adquirida em https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html

function putFireInAll() {
  memeImageContainer.style.border = '3px dashed red';
}

function washedAll() {
  memeImageContainer.style.border = '5px double blue';
}

function iLikeGreen() {
  memeImageContainer.style.border = '6px groove green';
}

function openMeme(event) {
  memeImage.src = event.target.src;
}

textInput.addEventListener('input', writeInContainer);
fire.addEventListener('click', putFireInAll);
water.addEventListener('click', washedAll);
earth.addEventListener('click', iLikeGreen);
memeCollection.addEventListener('click', openMeme);

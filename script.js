const memeText = document.getElementById('meme-text');
const textInput = document.querySelector('#text-input');
console.log(textInput);
// const imageContainer = document.getElementById('meme-image-container');

function writeText(_key) {
  memeText.innerText = _key.target.value;
}

textInput.addEventListener('input', writeText);

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

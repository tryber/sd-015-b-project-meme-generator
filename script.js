const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('input', writeInContainer);

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

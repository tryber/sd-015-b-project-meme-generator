const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

function textCreate() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', textCreate);

function imagemContain() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function setImage() {
      memeImage.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
  }
}

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', imagemContain);

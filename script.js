const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const img = document.getElementById('meme-image');
const imgPreview = document.getElementById('meme-insert');

function textInput() {
  const inputValue = input.value;
  memeText.innerText = inputValue;
}

function previewImage() {
  const file = imgPreview.files;
  if (file.length > 0) {
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      img.setAttribute('src', event.target.result);
    };

    fileReader.readAsDataURL(file[0]);
    console.log('teste');
  }
}

input.addEventListener('keyup', textInput);
imgPreview.addEventListener('change', previewImage);

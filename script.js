const imgContainer = document.getElementById('meme-image-container');
const inputText = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const inputImage = document.getElementById('meme-insert');

function textMemeOnPage() {
  const textValue = inputText.value;
  textMeme.innerText = textValue;
}

function previewImage() {
  const insertedImage = inputImage.files;

  if (insertedImage.length > 0) {
    const insertedImageReader = new FileReader();
    insertedImageReader.onload = (e) => {
      const event = e;
      memeImg.setAttribute('src', event.target.result);
    };

    insertedImageReader.readAsDataURL(insertedImage[0]);
  }
}

inputText.addEventListener('keyup', textMemeOnPage);
inputImage.addEventListener('change', previewImage);

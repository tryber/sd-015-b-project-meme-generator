const imgContainer = document.getElementById('meme-image-container');
const inputText = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const inputImage = document.getElementById('meme-insert');
const stylesContainer = document.getElementById('style-buttons');
const famousContainer = document.getElementById('memes-famous');

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

function changeStyle(event) {
  const eventTarget = event.target;
  const idTarget = eventTarget.id;
  imgContainer.style.border = '';
  imgContainer.className = idTarget;
}

function selectFamous(event) {
  const eventTarget = event.target;

  const insertedImage = eventTarget.getAttribute('src');

  memeImg.setAttribute('src', insertedImage);
}

window.onload = () => {
  imgContainer.style.border = '1px solid black';
  for (let index = 0; index < stylesContainer.children.length; index += 1) {
    const button = stylesContainer.children[index];
    button.addEventListener('click', changeStyle);
  }
  for (let index = 1; index < famousContainer.children.length; index += 1) {
    const meme = famousContainer.children[index];
    meme.addEventListener('click', selectFamous);
  }
};

inputText.addEventListener('keyup', textMemeOnPage);
inputImage.addEventListener('change', previewImage);

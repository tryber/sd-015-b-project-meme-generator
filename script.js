const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');

function createTextContainer() {
  const memeText = document.createElement('p');

  memeText.id = 'meme-text';

  memeContainer.appendChild(memeText);
}

function addTexttoMeme() {
  const memeText = document.getElementById('meme-text');
  const typedText = textInput.value;

  memeText.innerText = typedText;
}

textInput.addEventListener('keyup', addTexttoMeme);

const imageInput = document.getElementById('meme-insert');

function addImagetoMeme() {
  const uploadedImage = imageInput.files[0];
  const memeImage = document.createElement('img');

  memeImage.id = 'meme-image';
  memeImage.src = URL.createObjectURL(uploadedImage);
  memeContainer.appendChild(memeImage);
}

imageInput.addEventListener('change', addImagetoMeme);

function addStyleToBorder(style) {
  if (style === 'fire') {
    memeContainer.style.border = '3px dashed red';
  }

  if (style === 'water') {
    memeContainer.style.border = '5px double blue';
  }

  if (style === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
}

function createBorderButtons() {
  const buttonsContainer = document.getElementById('border-buttons');
  const buttonsIds = ['fire', 'water', 'earth'];
  const buttonsColors = ['red', 'blue', 'green'];

  for (let index = 0; index < buttonsIds.length; index += 1) {
    const button = document.createElement('button');
    button.id = buttonsIds[index];
    button.innerText = buttonsIds[index];
    button.style.textTransform = 'uppercase';
    button.style.backgroundColor = buttonsColors[index];
    button.addEventListener('click', () => {
      addStyleToBorder(buttonsIds[index]);
    });
    buttonsContainer.appendChild(button);
  }
}

window.onload = () => {
  createTextContainer();
  createBorderButtons();
};

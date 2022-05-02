const colors = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const showTextElement = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');
const showImgElement = document.getElementById('meme-image');
const bordersInputs = document.querySelectorAll('.border');
const preImages = document.querySelectorAll('.pre-meme');

function preMemeEventListeners() {
  preImages.forEach((el) => {
    el.addEventListener('click', () => {
      showImgElement.setAttribute('src', el.getAttribute('src'));
    });
  });
}
function borderEventListeners() {
  bordersInputs.forEach((el) => {
    el.addEventListener('click', (e) => {
      memeContainer.setAttribute('style', `border: ${colors[e.target.id]}`);
    });
  });
}

function imgContainerEventListeners() {
  textInput.addEventListener('keyup', () => {
    showTextElement.innerText = textInput.value;
  });

  imgInput.addEventListener('change', () => {
    showImgElement.setAttribute('src', URL.createObjectURL(imgInput.files[0]));
  });
}

preMemeEventListeners();
borderEventListeners();
imgContainerEventListeners();

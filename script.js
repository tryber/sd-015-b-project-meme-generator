// const
const inputText = document.getElementById('text-input');
const memeTextBox = document.getElementById('meme-text');
const buttonInputImage = document.getElementById('meme-insert');
const realInputImage = document.getElementById('get-file');
const textFileImage = document.getElementById('text-file');
const memeImageBox = document.getElementById('meme-image');
const buttonFireBorder = document.getElementById('fire');
const buttonWaterBorder = document.getElementById('water');
const buttonEarthBorder = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const famousMemes = document.querySelectorAll('#memes-conhecidos div');

// function to input text in meme-text
function memeTextInput() {
  const memeText = inputText.value;
  memeTextBox.innerText = memeText;
}

// addEventListener to inputText
inputText.addEventListener('input', memeTextInput);

// addEventListener to buttonInputImage for click in real button
buttonInputImage.addEventListener('click', () => { realInputImage.click(); });

// function to put image in meme-image
function memeImageInput() {
  if (realInputImage.value) {
    const imageName = realInputImage.value.split('\\');
    textFileImage.innerText = imageName[imageName.length - 1];
    memeImageBox.src = URL.createObjectURL(realInputImage.files[0]);
  } else {
    textFileImage.innerText = 'No file Choose, yet';
  }
}

// addEventListener to realInputImage
realInputImage.addEventListener('change', memeImageInput);

// fuction to change border of meme image
function changeImageBorder(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  const elementId = element.id;
  if (elementId === 'fire') {
    memeContainer.style.border = '3px dashed red';
  } else if (elementId === 'water') {
    memeContainer.style.border = '5px double blue';
  } else if (elementId === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
}

// addEventListener to all borderButtons
buttonFireBorder.addEventListener('click', changeImageBorder);
buttonWaterBorder.addEventListener('click', changeImageBorder);
buttonWaterBorder.lastElementChild.addEventListener('click', changeImageBorder);
buttonEarthBorder.addEventListener('click', changeImageBorder);

// function to pull meme in main image
function pullFamousMemeAsMain(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  memeImageBox.src = element.src;
  textFileImage.innerText = element.parentElement.id;
}

// addEventListener to all meme img
famousMemes[0].addEventListener('click', pullFamousMemeAsMain);
famousMemes[1].addEventListener('click', pullFamousMemeAsMain);
famousMemes[2].addEventListener('click', pullFamousMemeAsMain);
famousMemes[3].addEventListener('click', pullFamousMemeAsMain);

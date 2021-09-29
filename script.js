const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memePicture = document.getElementById('meme-image');
const inputImage = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container')
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

const updateImage = (event) => {
  const newImg = event.target.files[0];
  memePicture.src = window.URL.createObjectURL(newImg);
}
inputImage.addEventListener('change', updateImage)

//------------------------------------------------------

const showText = () => {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', showText)

//------------------------------------------------------

const changeBorderFire = () => {
  container.style.border = '3px dashed red';
}

btnFire.addEventListener('click', changeBorderFire)


const changeBorderWater = () => {
  container.style.border = '5px double blue';
}

btnWater.addEventListener('click', changeBorderWater)

const changeBorderEarth = () => {
  container.style.border = '6px groove green';
}

btnEarth.addEventListener('click', changeBorderEarth)

//------------------------------------------------------

const updateImageMeme1 = () => {
  memePicture.src = 'imgs/meme1.png';
}
meme1.addEventListener('click', updateImageMeme1)

const updateImageMeme2 = () => {
  memePicture.src = 'imgs/meme2.png';
}
meme2.addEventListener('click', updateImageMeme2)

const updateImageMeme3 = () => {
  memePicture.src = 'imgs/meme3.png';
}
meme3.addEventListener('click', updateImageMeme3)

const updateImageMeme4 = () => {
  memePicture.src = 'imgs/meme4.png';
}
meme4.addEventListener('click', updateImageMeme4)




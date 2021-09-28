const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memePicture = document.getElementById('meme-image');
const inputImage = document.getElementById('meme-insert');

const updateImage = (event) => {
  const newImg = event.target.files[0];
  memePicture.src = window.URL.createObjectURL(newImg);
}

inputImage.addEventListener('change', updateImage)

const showText = () => {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', showText)




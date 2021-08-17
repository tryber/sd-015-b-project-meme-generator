// const
const inputText = document.getElementById('text-input');
const memeTextBox = document.getElementById('meme-text');
const buttonInputImage = document.getElementById('meme-insert');
const realInputImage = document.getElementById('get-file');
const textFileImage = document.getElementById('text-file');
const memeImageBox = document.getElementById('meme-image');

// function to input text in meme-text
function memeTextInput() {
  memeText = inputText.value;
  memeTextBox.innerText = memeText;
}

// addEventListener to inputText
inputText.addEventListener('input', memeTextInput);

// addEventListener to buttonInputImage for click in real button
buttonInputImage.addEventListener('click', () => {realInputImage.click()});

// function to put image in meme-image
function memeImageInput() {
  if (realInputImage.value) {
    textFileImage.innerText = realInputImage.value;
    memeImageBox.src = URL.createObjectURL(realInputImage.files[0]);
  } else {
    textFileImage.innerText = 'No file Choose, yet';
  }
}

// addEventListener
realInputImage.addEventListener('change', memeImageInput)
// const
const inputText = document.getElementById('text-input');
const memeTextBox = document.getElementById('meme-text');

// function to input text in meme-text
function memeTextInput() {
  memeText = inputText.value;
  memeTextBox.innerText = memeText;
}

// addEventListener to inputText
inputText.addEventListener('input', memeTextInput);
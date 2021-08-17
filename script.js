const input = document.querySelector('input');
const textContainer = document.querySelector('#meme-text');

function getText() {
  textContainer.innerHTML = input.value;
}

input.addEventListener('keyup', getText);

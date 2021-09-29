const textoDigitado = document.getElementById('text-input');

function escreveNaTela() {
  const text = document.getElementById('meme-text');
  text.innerText = textoDigitado.value;
}

textoDigitado.addEventListener('keyup', escreveNaTela);

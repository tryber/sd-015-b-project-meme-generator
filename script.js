// Variáveis
  const input = document.querySelector("#text-input");
  const container = document.querySelector("#meme-image-container");
  const text = document.querySelector("#meme-text");

// Funções
  function updateText(event) {
    let memeText = event.value;
    text.innerHTML = event.target.value;
  }

// Event Listeners
input.addEventListener('input', updateText)
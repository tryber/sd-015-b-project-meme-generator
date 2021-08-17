function setMemeText(event) {
  const textInput = event.target
  const memeText = document.getElementById("meme-text");
  memeText.innerText = textInput.value
}

function startEventListeners() {
  const textInput = document.getElementById("text-input");
  textInput.addEventListener("keyup", setMemeText)
}



window.onload = function () {
  startEventListeners()
}
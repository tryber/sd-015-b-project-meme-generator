const memeImageContainer = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const chooseFile = document.querySelector("#meme-insert")
const fireBorder = document.querySelector("#fire")
const waterBorder = document.querySelector("#water")
const earthBorder = document.querySelector("#earth")



function addText() {
  const textValue = textInput.value;
  memeText.innerText = textValue;
}

textInput.addEventListener('keyup', addText);

function addImage() {
    const uploadedImage = chooseFile.files;
    const createImage = document.querySelector('#meme-image');
    createImage.src = URL.createObjectURL(uploadedImage[0]);
  }
  
  chooseFile.addEventListener('change', addImage);

  function FireBorderChange(){
    memeImageContainer.style.border = "3px dashed red"
  }

  fireBorder.addEventListener("click", FireBorderChange)

  function waterBorderChange(){
    memeImageContainer.style.border = "5px double blue"
  }

  waterBorder.addEventListener("click", waterBorderChange)

  function earthBorderChange(){
    memeImageContainer.style.border = "6px groove green"
  }

  earthBorder.addEventListener("click", earthBorderChange)
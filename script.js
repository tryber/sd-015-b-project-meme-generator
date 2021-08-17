const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

textInput.addEventListener('input', textoDoImput);

function textoDoImput(event) {
  memeText.innerText = event.target.value;
}

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]')
    .addEventListener('change', function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});

function toLimit(string = ""){
    string.value = string.value.substring(0,60);
}
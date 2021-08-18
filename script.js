const inputMemeText = document.getElementById('text-input');
const localText = document.getElementById('meme-text');

inputMemeText.addEventListener('input', () => {
	const memeText = inputMemeText.value;
	localText.innerText = memeText;
});

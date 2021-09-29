const textoDigitado = document.getElementById('text-input');
const botaoFogo = document.getElementById('fire');
const botaoAgua = document.getElementById('water');
const botaoTerra = document.getElementById('earth');
const imagem = document.getElementById('meme-image');
const secaoImagem = document.getElementById('meme-image-container');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function escreveNaTela() {
  const text = document.getElementById('meme-text');
  text.innerText = textoDigitado.value;
}
textoDigitado.addEventListener('keyup', escreveNaTela);
const memeIn = document.getElementById('meme-insert');
function impressora() {
  const removeLink = memeIn.value.slice(12, memeIn.length);
  imagem.src = removeLink;
}
memeIn.addEventListener('change', impressora);

function mudaBordaFogo() {
  secaoImagem.style.border = '3px dashed red';
}

botaoFogo.addEventListener('click', mudaBordaFogo);

function mudaBordaAgua() {
  secaoImagem.style.border = '5px double blue';
}

botaoAgua.addEventListener('click', mudaBordaAgua);

function mudaBordaTerra() {
  secaoImagem.style.border = '6px groove green';
}

botaoTerra.addEventListener('click', mudaBordaTerra);

function retornaBorda() {
  secaoImagem.style.border = '1px solid';
}
function adicionaMeme1() {
  imagem.src = '/imgs/meme1.png';
}
function adicionaMeme2() {
  imagem.src = '/imgs/meme2.png';
}
function adicionaMeme3() {
  imagem.src = '/imgs/meme3.png';
}
function adicionaMeme4() {
  imagem.src = '/imgs/meme4.png';
}
function retornaImg() {
  imagem.src = '';
}
botaoTerra.addEventListener('dblclick', retornaBorda);
botaoAgua.addEventListener('dblclick', retornaBorda);
botaoFogo.addEventListener('dblclick', retornaBorda);
meme1.addEventListener('click', adicionaMeme1);
meme2.addEventListener('click', adicionaMeme2);
meme3.addEventListener('click', adicionaMeme3);
meme4.addEventListener('click', adicionaMeme4);
meme1.addEventListener('dblclick', retornaImg);
meme2.addEventListener('dblclick', retornaImg);
meme3.addEventListener('dblclick', retornaImg);
meme4.addEventListener('dlbclick', retornaImg);

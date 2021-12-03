const socket = window.io();
const btn1 = document.querySelector('#produtoBtn1');
const btn2 = document.querySelector('#produtoBtn2');
const btn3 = document.querySelector('#produtoBtn3');

function getElement ({ target }) {
  const element = target.parentNode.querySelector('.price');
  element.innerText = parseInt(element.innerText) + 5;
  const elements = Array.from(document.querySelectorAll('.price'));
  console.log(elements);
  const numeros = elements.map(element => parseInt(element.innerText));
  socket.emit('addPrice', numeros);
}

btn1.addEventListener('click', getElement);
btn2.addEventListener('click', getElement);
btn3.addEventListener('click', getElement);

function setValues (mediaDePreco) {
  const elements = document.querySelectorAll('.price');
  mediaDePreco.forEach((price, index) => {
    elements[index].innerText = price;
    const btn = elements[index].parentNode.querySelector('input');
    if (price >= 100) {
      btn.setAttribute('disabled', true);
      btn.setAttribute('value', 'Produto arrematado');
      return;
    }
    btn.removeAttribute('disabled');
    btn.setAttribute('value', 'Dar lance');
  });
}

socket.on('sendPrices', ({mediaDePreco}) => setValues(mediaDePreco));
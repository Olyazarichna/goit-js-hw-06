function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divAdd = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');

let amount = Number('');
console.log(amount);

createEl.addEventListener('click', onCreate);
destroyEl.addEventListener('click', destroyBoxes);
inputEl.addEventListener('input', amountOfBoxes);

function amountOfBoxes(event) {
  amount = event.currentTarget.value;
}

function createBoxes(amount) {
  let boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style= "width:${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"> </div>`
    );
    size += 10; 
  }
  divAdd.insertAdjacentHTML('afterbegin', boxes.join(''));
}

function onCreate() {
  createBoxes(amount);
}

function destroyBoxes() {
  divAdd.innerHTML = '';
}

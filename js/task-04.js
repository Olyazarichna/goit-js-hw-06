const decrementEl = document.querySelector('button[data-action="decrement"]');

const incrementEl = document.querySelector('button[data-action="increment"]');

const spanEl = document.querySelector('#value');

let counterValue = 0;

const incrementFn = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

const decrementFn = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

incrementEl.addEventListener('click', incrementFn);
decrementEl.addEventListener('click', decrementFn);

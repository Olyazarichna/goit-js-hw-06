const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  return listEl;
});

// const elements = [];
// for(let i = 0; i < ingredients.length; i += 1) {

// const listEl = document.createElement('li');
// listEl.classList.add('item');
// listEl.textContent = ingredients[i];

// console.log(listEl);

// elements.push(listEl);
// }

const addEl = document.querySelector('#ingredients');
addEl.after(...elements);

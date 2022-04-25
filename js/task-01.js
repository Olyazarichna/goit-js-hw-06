const countOfList = document.querySelectorAll('.item');
console.log('Number of categories: ', countOfList.length);

countOfList.forEach(list => {
  const titleEl = list.querySelector('h2').textContent;
  const numberListEl = list.querySelector('ul').children.length;
  console.log('Category: ', titleEl);
  console.log('Elements:', numberListEl);
});

// const countOfList = document.querySelectorAll('ul .item');
// console.log('Number of categories:', countOfList.length);
// const titleEl = document.querySelectorAll('h2');

// const numberListEl = document.querySelectorAll('.item ul');

// for (let i = 0; i < numberListEl.length; i += 1) {}
// for (let i = 0; i < titleEl.length; i += 1) {
//   console.log('Category:', titleEl[i].textContent);
//   console.log('Elements:', numberListEl[i].children.length);
// }
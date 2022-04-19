const countOfList = document.querySelectorAll('ul .item');
console.log('Number of categories:', countOfList.length);



const titleEl = document.querySelectorAll('h2');

const numberListEl = document.querySelectorAll('.item ul');

for(let i = 0; i < numberListEl.length; i += 1) {
    
}
for(let i = 0; i < titleEl.length; i += 1) {
    console.log('Category:', titleEl[i].textContent);
    console.log('Elements:', numberListEl[i].children.length);
}

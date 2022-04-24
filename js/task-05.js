const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input', event => {
    if(inputEl.textContent == ''){
        outputEl.textContent = "Anonymous";
    }
 outputEl.textContent = event.target.value;

});

console.log(outputEl.textContent);
// console.log(inputEl.event.currentTarget.value);
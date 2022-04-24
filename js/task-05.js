const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input', event => {
    if(inputEl.value== ''){
        outputEl.textContent = "Anonymous";
    }
 outputEl.textContent = event.target.value;

});

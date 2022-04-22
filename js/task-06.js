const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', () => {
  if (inputEl.dataset.length <= inputEl.value.length) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});

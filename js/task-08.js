const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const  email = formEl.elements.email.value;
  const  password = formEl.elements.password.value;

  if (email === '' || password === '') {
    alert('All fields should be fill out');
  } else {
     console.log({ email, password});
 
   event.currentTarget.reset();
    }
});

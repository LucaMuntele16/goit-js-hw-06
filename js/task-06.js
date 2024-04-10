const input = document.querySelector('#validation-input');
input.addEventListener('blur', event => {
  if (event.currentTarget.value.length == 6) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});

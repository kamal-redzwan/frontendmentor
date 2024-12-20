function validateForm() {
  const inputForm = document.querySelector('.input-form');
  const inputEmail = document.querySelector('.input__email');
  const inputError = document.querySelector('.input__error');
  if (!inputEmail.checkValidity()) {
    inputError.style.display = 'block';
    inputForm.style.border = '2px solid hsl(0, 93%, 68%)';
  }
}

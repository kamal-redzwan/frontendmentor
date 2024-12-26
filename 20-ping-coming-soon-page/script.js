const inputEmail = document.querySelector('.input_email');
const errorLog = document.querySelector('.error_log');
if (!inputEmail.checkValidity()) {
  errorLog.style.display = 'block';
  inputEmail.style.border = '2px solid var(--light-red)';
}
const form = document.querySelector('.signup-form');
const inputs = document.querySelectorAll('.input-field');

// Validation patterns
const patterns = {
  email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
};

// Show error state for input
function showError(input, message) {
  const wrapper = input.closest('.input-wrapper');
  input.classList.add('error');

  // Show error icon
  const errorIcon = wrapper.querySelector('.error-icon');
  errorIcon.style.display = 'block';

  // Show error message
  const errorLog = wrapper.querySelector('.error-log');
  if (errorLog) {
    errorLog.style.display = 'block';
    errorLog.textContent = message;
  }
}

// Remove error state
function removeError(input) {
  const wrapper = input.closest('.input-wrapper');
  input.classList.remove('error');

  // Hide error icon
  const errorIcon = wrapper.querySelector('.error-icon');
  errorIcon.style.display = 'none';

  // Hide error message
  const errorLog = wrapper.querySelector('.error-log');
  if (errorLog) {
    errorLog.style.display = 'none';
    errorLog.textContent = '';
  }
}

// Validate individual input field
function validateInput(input) {
  let isValid = true;

  // remove existing error first
  removeError(input);

  // check if the input is empty
  if (input.value.trim() === '') {
    showError(input, `${input.placeholder} cannot be empty`);
    isValid = false;
  }

  // check if the input matches the pattern
  else if (input.type === 'email' && input.value.trim() !== '') {
    if (!patterns.email.test(input.value)) {
      showError(input, 'Looks like this is not an email');
      isValid = false;
    }
  }

  return isValid;
}

// Add validation to each input
inputs.forEach((input) => {
  // validate on blur
  input.addEventListener('blur', (e) => {
    validateInput(input);
  });

  // remove error on focus
  input.addEventListener('focus', (e) => {
    removeError(input);
  });

  // realtime validation for email
  if (input.type === 'email') {
    input.addEventListener('input', (e) => {
      validateInput(input);
    });
  }
});

// form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isFormValid = true;

  // validate all inputs
  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    console.log('Form is valid, submitting...');
    // form.submit();
  }
});
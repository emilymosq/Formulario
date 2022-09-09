const form = document.querySelector('.form');
const username = document.querySelector('.form-username');
const email = document.querySelector('.form-email');
const password = document.querySelector('.form-password');
const toggle = document.getElementById('toggle');

form.addEventListener("submit", checkForm);

function checkForm(e) {
  e.preventDefault();

  usernameValue = username.value.trim();
  emailValue = email.value.trim();
  passwordValue = password.value.trim();

  //Validaciones

  if (usernameValue === "") {
    showError(username, "El usuario no puede estar vacio.");
  } else if (!isUsername(usernameValue)) {
    showError(username, 'El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.')
  } else {
    showSuccess(username);
  }

  if (emailValue === "") {
    showError(email, "El email no puede estar vacio.");
  } else if (!isEmail(emailValue)) {
    showError(email, "El email solo puede contener letras, numeros, puntos, guiones y guion bajo.")
  } else {
    showSuccess(email);
  }

  if (passwordValue === "") {
    showError(password, "La contraseña no puede estar vacia.");

  } else if (!isPassword(passwordValue)) {
    showError(password, "La contraseña tiene que ser de 4 a 12 dígitos.")
  } else {
    showSuccess(password);
  }
}

function showError(input, errorMessage) {
  let formGroup = input.parentElement;
  addClassToFormGroup(formGroup, 'form-error', 'form-success', 'toggle');
  setErrorMessage(formGroup, errorMessage);
}

function showSuccess(input) {
  let formGroup = input.parentElement;
  addClassToFormGroup(formGroup, 'form-success', 'form-error');
  setErrorMessage(formGroup, '');
}

function addClassToFormGroup(formGroup, classToAdd, classToRemove) {
  formGroup.classList.remove(classToRemove);
  formGroup.classList.add(classToAdd);
}

function setErrorMessage(formGroup, errorMessage) {
  let messageElement = formGroup.querySelector(".form-message");
  messageElement.innerText = errorMessage;
}

function isUsername(username) {
  return /^[a-zA-Z0-9\_\-]{4,16}$/.test(username);  // Letras, numeros, guion y guion_bajo
}

function isEmail(email) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email); // Letras, arroba, punto, guion y guion bajo, numeros.
}

function isPassword(password) {
  return /^.{4,12}$/.test(password); // 4 a 12 digitos.
}

function showHide(){
  if(password.type === 'password'){
    password.setAttribute('type', 'text');
    toggle.classList.add('hide')
  }
  else{
    password.setAttribute('type', 'password');
    toggle.classList.remove('hide')
  }
}
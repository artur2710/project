const form = document.querySelector('form');
const formSubmit = document.querySelector('button');

form.addEventListener('change', changeFormHandler);

function changeFormHandler() {
  console.log(form.checkValidity());
  if (form.checkValidity()) {
    formSubmit.removeAttribute('disabled');
  }
}
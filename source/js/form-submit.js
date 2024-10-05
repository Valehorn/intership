import { onFormSubmit, onInputChange, onCheckboxFocus, onPhoneFocus, onPhoneBlur, formatPhoneNumber } from './validate';

const form = document.querySelector('.form__inner');
const nameInput = form.querySelector('.form-group__input--name');
const phoneInput = form.querySelector('.form-group__input--phone');
const textareaInput = form.querySelector('.form__textarea');
const checkboxInput = form.querySelector('.form-group__input-checkbox');

form.addEventListener('submit', onFormSubmit);

if (nameInput) {
  nameInput.addEventListener('input', () => onInputChange(nameInput));
}
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    formatPhoneNumber(phoneInput);
    onInputChange(phoneInput);
  });
  phoneInput.addEventListener('focus', () => onPhoneFocus(phoneInput));
  phoneInput.addEventListener('blur', () => onPhoneBlur(phoneInput));
}
if (textareaInput) {
  textareaInput.addEventListener('input', () => onInputChange(textareaInput));
}
if (checkboxInput) {
  checkboxInput.addEventListener('change', () => onInputChange(checkboxInput));
  checkboxInput.addEventListener('focus', () => {
    checkboxInput.addEventListener('keydown', (evt) => {
      onCheckboxFocus(evt, checkboxInput);
    });
  });
}

const form = document.querySelector('.form__inner');
const formFields = form.querySelector('.form-group__fields');
const formSelect = form.querySelector('.form-group__select');
const formItems = form.querySelectorAll('.form-group__select-item');
const formItemContainer = form.querySelector('.form-group__select-item-container');
const formSelectValue = form.querySelector('.form-group__select-value');
const formHiddenSelectInput = form.querySelector('.form-group__select-hidden');

const onSelectClickOpen = () => {
  if (formFields.classList.contains('form-group__fields--open')) {
    formFields.classList.remove('form-group__fields--open');
  } else {
    formFields.classList.add('form-group__fields--open');
  }
};

const onSelectClickClose = () => {
  formFields.classList.remove('form-group__fields--open');
};

const onSelectItemClick = (evt) => {
  if (!formItems) {
    return;
  }
  formSelectValue.textContent = evt.target.dataset.cityForm;
  formHiddenSelectInput.value = formSelectValue.textContent.trim();
};

formSelect.addEventListener('click', onSelectClickOpen);
formSelect.addEventListener('blur', onSelectClickClose);

formItemContainer.addEventListener('click', onSelectItemClick);

form.addEventListener('click', (evt) => {
  if (!formSelect.contains(evt.target) && !formFields.contains(evt.target)) {
    formFields.classList.remove('form-group__fields--open');
  }
});

const modal = document.querySelector('.modal');
const fields = modal.querySelector('.form-group__fields');
const select = modal.querySelector('.form-group__select');
const item = modal.querySelectorAll('.form-group__select-item');
const modalItemContainer = modal.querySelector('.form-group__select-item-container');
const selectValue = modal.querySelector('.modal__select-value');
const hiddenSelectInput = modal.querySelector('.modal__select-hidden');

const onSelectClickOpen = () => {
  if (fields.classList.contains('form-group__fields--open')) {
    fields.classList.remove('form-group__fields--open');
  } else {
    fields.classList.add('form-group__fields--open');
  }
};

const onSelectClickClose = () => {
  fields.classList.remove('form-group__fields--open');
};

const onSelectItemClick = (evt) => {
  if (!item) {
    return;
  }
  selectValue.textContent = evt.target.dataset.cityModal;
  hiddenSelectInput.value = selectValue.textContent.trim();
};

select.addEventListener('click', onSelectClickOpen);
select.addEventListener('blur', onSelectClickClose);

modalItemContainer.addEventListener('click', onSelectItemClick);

modal.addEventListener('click', (evt) => {
  if (!select.contains(evt.target) && !fields.contains(evt.target)) {
    fields.classList.remove('form-group__fields--open');
  }
});

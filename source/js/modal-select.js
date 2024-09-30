const modal = document.querySelector('.modal');
const modalFields = modal.querySelector('.form-group__fields');
const modalSelect = modal.querySelector('.form-group__select');
const modalItems = modal.querySelectorAll('.form-group__select-item');
const modalItemContainer = modal.querySelector('.form-group__select-item-container');
const modalSelectValue = modal.querySelector('.form-group__select-value');
const modalHiddenSelectInput = modal.querySelector('.form-group__select-hidden');

const onSelectClickOpen = () => {
  if (modalFields.classList.contains('form-group__fields--open')) {
    modalFields.classList.remove('form-group__fields--open');
  } else {
    modalFields.classList.add('form-group__fields--open');
  }
};

const onSelectClickClose = () => {
  modalFields.classList.remove('form-group__fields--open');
};

const onSelectItemClick = (evt) => {
  if (!modalItems) {
    return;
  }
  modalSelectValue.textContent = evt.target.dataset.cityModal;
  modalHiddenSelectInput.value = modalSelectValue.textContent.trim();
};

const onSelectItemKeydownEnter = (evt) => {
  if (!modalItems && !evt.key === 'Enter') {
    return;
  }
  modalSelectValue.textContent = evt.target.dataset.cityModal;
  modalHiddenSelectInput.value = modalSelectValue.textContent.trim();
  modalFields.classList.remove('form-group__fields--open');
};

modalSelect.addEventListener('click', onSelectClickOpen);
modalSelect.addEventListener('blur', onSelectClickClose);

modalItemContainer.addEventListener('click', onSelectItemClick);
modalItemContainer.addEventListener('keydown', onSelectItemKeydownEnter);

modal.addEventListener('click', (evt) => {
  if (!modalSelect.contains(evt.target) && !modalFields.contains(evt.target)) {
    modalFields.classList.remove('form-group__fields--open');
  }
});

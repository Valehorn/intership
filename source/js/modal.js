import { scrollToStart } from './utils';

const body = document.querySelector('.page-body');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');
const modalInputs = modal.querySelectorAll('.form-group__input, .form-group__input-checkbox');
const modalSelect = modal.querySelector('.form-group__select');

const openModal = (evt) => {
  if (!evt.target.closest('.about__button')) {
    return;
  }
  scrollToStart();
  body.classList.add('page-body--modal-open');
  modal.showModal();
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydownModalClose);
};

const closeModal = () => {
  modalForm.reset();
  body.classList.remove('page-body--modal-open');
  modalInputs.forEach((input) => {
    input.classList.remove('form-group__input--error');
  });
  modalSelect.textContent = '';
  modal.close();
  modal.style.display = 'none';
  modal.style.position = 'absolute';
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydownModalClose);
};

const onModalButtonClick = (evt) => {
  openModal(evt);
};

const onModalCloseButtonClick = () => {
  closeModal();
};

function onDocumentKeydownModalClose(evt) {
  if (modal.open && evt.key === 'Escape') {
    closeModal();
  }
}

function onDocumentClick(evt) {
  if (modal.open && !evt.target.closest('.modal') && evt.target !== modalButton) {
    closeModal();
  }
}

modalButton.addEventListener('click', onModalButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);

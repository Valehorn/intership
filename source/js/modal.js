import { scrollToStart } from './utils';
import { removeModalError } from './validate';

const body = document.querySelector('.page-body');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');
const modalSelectValue = modal.querySelector('.modal__select-value');
const modalSelectInput = modal.querySelector('.form-group__select-hidden');

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
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
};

const closeModal = () => {
  body.classList.remove('page-body--modal-open');
  modalSelectInput.value = '';
  modalSelectValue.textContent = modalSelectInput.value;
  removeModalError();
  modalForm.reset();
  modal.close();
  modal.style.display = 'none';
  modal.style.position = 'absolute';
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydownModalClose);
  modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
};

const onModalButtonClick = (evt) => {
  openModal(evt);
};

function onModalCloseButtonClick() {
  closeModal();
}

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

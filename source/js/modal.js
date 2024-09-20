import { scrollToStart } from './utils';

const body = document.querySelector('.page-body');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');

const openModal = () => {
  scrollToStart();
  body.classList.add('page-body--modal-open');
  modal.showModal();
  document.addEventListener('click', onDocumentClick);
};

const closeModal = () => {
  modalForm.reset();
  body.classList.remove('page-body--modal-open');
  modal.close();
  document.removeEventListener('click', onDocumentClick);
};

const onModalButtonClick = () => {
  openModal();
};

const onModalCloseButtonClick = () => {
  closeModal();
};

function onDocumentClick(evt) {
  if (modal.open && !evt.target.closest('.modal') && evt.target !== modalButton) {
    closeModal();
  }
}

modalButton.addEventListener('click', onModalButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);

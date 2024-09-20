import { scrollToStart } from './utils';

const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');

const openModal = () => {
  scrollToStart();
  modal.showModal();
  document.addEventListener('click', onDocumentClick);
};

const closeModal = () => {
  modalForm.reset();
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
  if (modal.open && evt.target === modal) {
    closeModal();
  }
}

modalButton.addEventListener('click', onModalButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);

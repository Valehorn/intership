import { scrollToStart } from './utils';

const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');

const openModal = () => {
  scrollToStart();
  modal.showModal();
};

const closeModal = () => {
  modalForm.reset();
  modal.close();
};

const onModalButtonClick = () => {
  openModal();
};

const onModalCloseButtonClick = () => {
  closeModal();
};

const onDocumentClick = (evt) => {
  if (modal.open && evt.target === modal) {
    closeModal();
  }
};

document.addEventListener('click', onDocumentClick);
modalButton.addEventListener('click', onModalButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);

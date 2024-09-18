const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
  modal.closeModal();
};

const onModalButtonClick = () => {
  openModal();
};

const onModalCloseButtonClick = () => {
  closeModal();
};

modalButton.addEventListener('click', onModalButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);

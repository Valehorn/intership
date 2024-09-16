import { isEscapeKey } from './utils';

const body = document.querySelector('.page-body');
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__button-menu');

const openMenu = () => {
  body.classList.add('page-body--menu-open');
  nav.classList.add('header__nav--open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

const closeMenu = () => {
  if (body.classList.contains('page-body--menu-open')) {
    body.classList.remove('page-body--menu-open');
    nav.classList.remove('header__nav--open');
    document.removeEventListener('keydown', onDocumentKeyDown);
  }
};

const toggleMenu = () => {
  const isMenuOpen = body.classList.contains('page-body--menu-open');
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onBurgerButtonClick = () => {
  toggleMenu();
};

function onDocumentKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

const onDocumentClick = (evt) => {
  const isClickNav = evt.target.closest('.header__nav');
  const isClickBurgerButton = evt.target.closest('.header__button-menu');
  if (!isClickNav && !isClickBurgerButton) {
    closeMenu();
  }
};

const onNavButtonClick = (evt) => {
  const button = evt.target.closest('.header__nav-button');
  if (!button) {
    return;
  }
  const parentItem = button.closest('.header__nav-item');
  const subList = parentItem.querySelector('.header__nav-sub-list');

  if (subList) {
    if (subList.style.height && subList.style.height !== '0px') {
      subList.style.height = '0px';
      subList.style.visibility = 'hidden';
      button.style.marginBottom = '0'; // Убираем нижний отступ при закрытии подменю
      button.style.setProperty('--transform-rotate-item', '0deg');
    } else {
      subList.style.height = `${subList.scrollHeight}px`;
      subList.style.visibility = 'visible';
      button.style.marginBottom = '16px'; // Добавляем нижний отступ при открытии подменю
      button.style.setProperty('--transform-rotate-item', '180deg');
    }
  }
};

nav.addEventListener('click', onNavButtonClick);

document.addEventListener('click', onDocumentClick);

const burgerMenuToggle = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
};

export { burgerMenuToggle };

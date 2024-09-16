import { isEscapeKey, isEnterKey } from './utils';

const body = document.querySelector('.page-body');
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__button-menu');

const openMenu = () => {
  body.classList.add('page-body--menu-open');
  nav.classList.add('header__nav--open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
};

const closeMenu = () => {
  body.classList.remove('page-body--menu-open');
  nav.classList.remove('header__nav--open');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
};

const toggleMenu = () => {
  const isMenuOpen = body.classList.contains('page-body--menu-open') && nav.classList.contains('header__nav--open');
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onBurgerButtonClick = () => {
  toggleMenu();
};

function onDocumentEscKeyDown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

function onDocumentEnterKeyDown (evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    openMenu();
  }
}

nav.addEventListener('click', (evt) => {
  const navLink = evt.target.closest('.header__nav-link');
  if (!navLink) {
    return;
  }
  closeMenu();
});


const burgerMenuToggle = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
};

export {burgerMenuToggle};

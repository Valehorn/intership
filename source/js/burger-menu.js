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
  if (body.classList.contains('page-body--menu-open')) {
    body.classList.remove('page-body--menu-open');
    nav.classList.remove('header__nav--open');
    document.removeEventListener('keydown', onDocumentEscKeyDown);
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

function onDocumentEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

document.addEventListener('click', (evt) => {
  const isClickNav = evt.target.closest('.header__nav');
  const isClickBurgerButton = evt.target.closest('.header__button-menu');
  if (!isClickNav && !isClickBurgerButton) {
    closeMenu();
  }
});

const burgerMenuToggle = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
};

export { burgerMenuToggle };

import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import './modal';
import './modal-select';
import './validate';
import initSwiperPrograms from './programs-swiper';

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperPrograms();
};

bootStrap();

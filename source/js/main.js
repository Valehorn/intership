import { burgerMenuToggle } from './burger-menu';
import { initSwiperHero } from './hero-swiper';
import './modal';
import './modal-select';
import './form-select';
import './validate';
import initSwiperPrograms from './programs-swiper';
import tabsToggle from './news-tab';
import initSwiperNews from './news-swiper';
import { toggleFaqAccordion } from './faq-accordion';
import initSwiperReviews from './reviews-swiper';

const click = (evt) => {
  console.log(evt.target);
};

document.addEventListener('click', click);

const bootStrap = () => {
  burgerMenuToggle();
  initSwiperHero();
  initSwiperPrograms();
  tabsToggle();
  initSwiperNews();
  toggleFaqAccordion();
  initSwiperReviews();
};

bootStrap();

import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';

const heroSwiperContainer = document.querySelector('.hero__swiper');

const initSwiperHero = () => {
  const heroSwiper = new Swiper(heroSwiperContainer, {
    modules: [Pagination],
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
      bulletElement: 'button type="button"',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
        pagination: {
          clickable: true,
        }
      },
    }
  });

  heroSwiper.on('init', () => {
    updateTabIndex(heroSwiper);
    updatePaginationPosition(heroSwiper);
  });

  heroSwiper.on('slideChange', () => {
    updateTabIndex(heroSwiper);
    updatePaginationPosition(heroSwiper);
  });

  function updateTabIndex(swiperSlide) {
    const slides = swiperSlide.slides;
    const activeIndex = swiperSlide.activeIndex;

    slides.forEach((slide, index) => {
      const slideButtons = slide.querySelectorAll('.hero__card-button');
      if (slideButtons.length > 0) {
        if (index === activeIndex) {
          slideButtons.forEach((button) => {
            button.removeAttribute('tabindex');
          });
        } else {
          slideButtons.forEach((button) => {
            button.setAttribute('tabindex', '-1');
          });
        }
      }
    });
  }

  function updatePaginationPosition(swiperInstance) {
    const pagination = document.querySelector('.hero__pagination');
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    const slideInner = activeSlide.querySelector('.hero__slide-inner');
    const position = slideInner.offsetHeight;
    if (window.innerWidth >= 768) {
      pagination.style.bottom = `calc(${position}px + 60px)`;
    } else {
      pagination.style.bottom = `calc(${position}px + 20px)`;
    }
  }

  heroSwiper.init();
  updateTabIndex(heroSwiper);
  updatePaginationPosition(heroSwiper);
};

export { initSwiperHero };

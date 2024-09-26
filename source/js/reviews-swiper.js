import { Swiper } from 'swiper';
import 'swiper/scss';

const reviewsSwiperContainer = document.querySelector('.reviews__swiper');

const initSwiperReviews = () => {
  const swiperReviews = new Swiper(reviewsSwiperContainer, {
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
    speed: 900,
    loop: false,
    slidesPerView: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 1.267,
        spaceBetween: 30,
      },

      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false
      }
    },
  });
  swiperReviews.on('slideChange', () => {
    updateNavigationButtons(swiperReviews);
  });
  swiperReviews.on('slideNextTransitionStart', () => {
    updateNavigationButtons(swiperReviews);
  });
  updateNavigationButtons(swiperReviews);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.reviews__swiper-button-prev');
    const nextButton = document.querySelector('.reviews__swiper-button-next');

    if (swiper.isBeginning) {
      prevButton.classList.add('swiper-button--disabled');
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove('swiper-button--disabled');
      prevButton.disabled = false;
    }

    if (swiper.isEnd) {
      nextButton.classList.add('swiper-button--disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('swiper-button--disabled');
      nextButton.disabled = false;
    }
  }
};

export default initSwiperReviews;

import Swiper from 'swiper/bundle';
import 'swiper/scss';

const newsSwiperContainer = document.querySelector('.news__swiper');

const initSwiperNews = () => {
  const newsSwiper = new Swiper(newsSwiperContainer, {
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 2,
    navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });
  newsSwiper.on('slideChange', () => {
    updateNavigationButtons(newsSwiper);
  });

  newsSwiper.on('slideNextTransitionStart', () => {
    updateNavigationButtons(newsSwiper);
  });

  updateNavigationButtons(newsSwiper);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.news__swiper-button-prev');
    const nextButton = document.querySelector('.news__swiper-button-next');

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

export default initSwiperNews;

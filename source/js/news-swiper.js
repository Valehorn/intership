import Swiper from 'swiper/bundle';
import 'swiper/scss/grid';
import { Grid, Pagination } from 'swiper/modules';

const newsSwiperContainer = document.querySelector('.news__swiper');

const initSwiperNews = () => {
  const newsSwiper = new Swiper(newsSwiperContainer, {
    modules: [Grid, Pagination],
    speed: 600,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows : 2,
      fill: 'row',
    },
    navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
    },
    pagination: {
      el: '.news__pagination',
      bulletElement: 'button type="button"',
      bulletClass: 'news__pagination-bullet',
      bulletActiveClass: 'news__pagination-bullet--active',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
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

import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';

const programsSwiperContainer = document.querySelector('.programs__swiper');

const initSwiperPrograms = () => {
  const swiperPrograms = new Swiper(programsSwiperContainer, {
    modules: [Pagination],
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.programs__swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.programs__swiper-button-next',
      prevEl: '.programs__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1440: {
        slidesPerView: 3,
        allowTouchMove: false,
        pagination: {
          clickable: true,
        }
      },
    },
    on: {
      slideChange() {
        updateNavigationButtons(swiperPrograms);
      },
      slideNextTransitionStart() {
        updateNavigationButtons(swiperPrograms);
      }
    }
  });
  updateNavigationButtons(swiperPrograms);

  function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.programs__swiper-button-prev');
    const nextButton = document.querySelector('.programs__swiper-button-next');

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

export default initSwiperPrograms;

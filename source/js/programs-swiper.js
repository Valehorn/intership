import Swiper from 'swiper/bundle';
import 'swiper/scss';

const programsSwiperContainer = document.querySelector('.programs__swiper');

const initSwiperPrograms = () => {
  const swiperPrograms = new Swiper(programsSwiperContainer, {
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    scrollbar: {
      el: '.programs__swiper-scrollbar',
      clickable: true,
    },
    navigation: {
      nextEl: '.programs__swiper-button-next',
      prevEl: '.programs__swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.13,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
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

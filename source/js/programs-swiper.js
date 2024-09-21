import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';

const programsSwiperContainer = document.querySelector('.programs__swiper');

const initSwiperPrograms = () => {
  new Swiper(programsSwiperContainer, {
    modules: [Pagination],
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
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
    }
  });
};

export default initSwiperPrograms;

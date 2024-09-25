import Swiper from 'swiper/bundle';
import 'swiper/scss/grid';
import { Grid, Pagination } from 'swiper/modules';

const newsSwiperContainer = document.querySelector('.news__swiper');

const initSwiperNews = () => {
  let newsSwiper = null;
  if (newsSwiper) {
    newsSwiper.destroy(true, true);
  }
  newsSwiper = new Swiper(newsSwiperContainer, {
    modules: [Grid, Pagination],
    speed: 600,
    spaceBetween: 20,
    slidesPerView: 1,
    grid: {
      rows: 2,
      fill: 'column',
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
      renderBullet: (index, className) => `<button class="${className}">${index + 1}</button>`,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        verticalSwipes: true,
        pagination: {
          dynamicBullets: true,
          dynamicMainBullets: 4,
        },
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        verticalSwipes: false,
        spaceBetween: 32,
        allowTouchMove: false,
        pagination: {
          dynamicBullets: true,
          dynamicMainBullets: 4,
        },
        grid: {
          rows: 1,
        },
      },
    },
  });

  newsSwiper.on('slideChange', () => {
    updateNavigationButtons(newsSwiper);
    updateBullets(newsSwiper);
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

  function updateBullets(swiper) {
    const totalBullets = swiper.pagination.bullets.length;
    let currentSlide = swiper.realIndex + 1;

    if (totalBullets <= 4) {
      return;
    }

    if (window.innerWidth >= 1440) {
      currentSlide = swiper.realIndex + 3;
      const bulletsToShow = 4;
      let startBullet = 1;
      let endBullet = bulletsToShow;

      if (currentSlide >= 12) {
        startBullet = currentSlide - 2;
        endBullet = startBullet + bulletsToShow - 1;
      }

      startBullet = Math.max(startBullet, 1);

      if (endBullet > totalBullets) {
        endBullet = totalBullets;
        startBullet = Math.max(endBullet - bulletsToShow + 1, 1);
      }

      swiper.pagination.bullets.forEach((bullet, index) => {
        const bulletNumber = index + 1;

        if (bulletNumber >= startBullet && bulletNumber <= endBullet) {
          bullet.style.display = 'inline-block';
        } else {
          bullet.style.display = 'none';
        }
      });
    } else {
      const startBullet = Math.max(currentSlide - 2, 1);
      const thirdToLastBulletIndex = totalBullets - 4;
      const endBullet = Math.min(startBullet + 3, totalBullets);

      swiper.pagination.bullets.forEach((bullet, index) => {
        const bulletNumber = index + 1;

        if (swiper.isEnd && index === thirdToLastBulletIndex) {
          bullet.style.display = 'inline-block';
        } else if (bulletNumber >= startBullet && bulletNumber <= endBullet) {
          bullet.style.display = 'inline-block';
        } else {
          bullet.style.display = 'none';
        }
      });
    }
  }
  updateBullets(newsSwiper);
};

let resizeTimeout;

window.addEventListener('resize', () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(initSwiperNews, 1000);
});

export default initSwiperNews;

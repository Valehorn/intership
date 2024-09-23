const tabsList = document.querySelector('.news__list');

const onTabButtonClick = (evt) => {
  const buttonTarget = evt.target.closest('.news__tab-button');
  if (!buttonTarget) {
    return;
  }

  const tabButtonActive = tabsList.querySelector('.news__tab-button--active');

  if (tabButtonActive) {
    tabButtonActive.classList.remove('news__tab-button--active');
  }

  buttonTarget.classList.add('news__tab-button--active');
};

const tabsToggle = () => {
  if (!tabsList) {
    return;
  }
  tabsList.addEventListener('click', onTabButtonClick);
};

export { tabsToggle };

const burgerButton = document.querySelector('.burger-bottom');
const burgerMenu = document.querySelector('.nav-header__list');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burger-active');

  if (burgerButton.classList.contains('burger-active')) {
    burgerButton.setAttribute('aria-expanded', 'true');
    burgerButton.setAttribute('aria-label', 'Закрыть основное меню.');
    // eslint-disable-next-line no-undef
    disablePageScroll(burgerMenu);
  } else {
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerButton.setAttribute('aria-label', 'Открыть основное меню.');

    // eslint-disable-next-line no-undef
    enablePageScroll(burgerMenu);
  }
});

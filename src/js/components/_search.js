const btnSearch = document.querySelector('.header-search__icon');
const formSearch = document.querySelector('.header-top__form');
const cancelSearch = document.querySelector('.header-top__cancel');

btnSearch.addEventListener('click', () => {
  formSearch.classList.add('active');
  btnSearch.classList.add('none');
});

cancelSearch.addEventListener('click', () => {
  formSearch.classList.remove('active');
  btnSearch.classList.remove('none');
});

import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.right-about__input'),
  sentences: ['Пример: romanvergunov@gmail.com'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

superplaceholder({
  el: document.querySelector('.contacts-right__email'),
  sentences: ['Пример: romanvergunov@gmail.com'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

superplaceholder({
  el: document.querySelector('.contacts-right__name'),
  sentences: ['Пример: Вергунов Роман Олегович'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

superplaceholder({
  el: document.querySelector('.contacts-right__text'),
  sentences: ['Здесь Вы можете оставить свои отзывы о нашей студии...'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

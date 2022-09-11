/* eslint-disable no-inner-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const boxContacts = document.querySelector('.left-box');
const boxCloseBtn = document.querySelector('.left-box__close');

let flag = 0;

window.addEventListener('scroll', () => {
  const { scrollY } = window;
  const mapOffset = document.querySelector('#map').offsetTop;

  if ((scrollY >= mapOffset - 1000) && (flag === 0)) {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.769535, 37.639985],
        zoom: 15,
      });

      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('typeSelector');
      myMap.behaviors.disable(['scrollZoom']);

      const myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/pictures/contacts-marker__1920.png',
        iconImageSize: [12, 12],
        iconImageOffset: [10, 10],
      });

      myMap.geoObjects.add(myPlacemark);

      myPlacemark.events.add('click', () => {
        boxContacts.classList.toggle('active');
      });
    }

    flag = 1;
  }
});
boxCloseBtn.addEventListener('click', () => {
  boxContacts.classList.remove('active');
});

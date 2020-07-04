'use strict';

(function () {
  var MAP_Y_TOP_LIMIT = 130;
  var MAP_Y_BOTTOM_LIMIT = 630;

  var NUMBER_ADS = 8;

  var pinsContainerElement = window.service.elements.pinsContainerElement;

  var Data = window.service.Data;

  function getAd(numberAd) {
    var numberAvatar = numberAd < 10 ? '0' + numberAd : numberAd;
    var x = window.Util.getRandomNumber(0, pinsContainerElement.clientWidth); // Случайная координата по горизонтали
    var y = window.Util.getRandomNumber(MAP_Y_TOP_LIMIT, MAP_Y_BOTTOM_LIMIT); // Случайная координата по вертикали

    return {
      author: {
        avatar: 'img/avatars/user' + numberAvatar + '.png', // Генерируем ссылку на аватарку
      },

      offer: {
        title: 'Заголовок объявления',
        address: x + ', ' + y,
        price: window.Util.getRandomNumber(500, 10000), // Генерируем случайную цену
        type: Data.types[window.Util.getRandomNumber(0, Data.types.length)], // Выбираем случайный тип объявления
        rooms: window.Util.getRandomNumber(1, 100), // Генерируем случайное кол-во комнат
        guests: window.Util.getRandomNumber(0, 3), // Генерируем случайное кол-во гостей
        checkin: Data.checks[window.Util.getRandomNumber(0, Data.checks.length)], // Случайно выбираем дату заезда
        checkout: Data.checks[window.Util.getRandomNumber(0, Data.checks.length)], // Случайно выбираем дату выезда
        features: window.Util.getRandomArray(Data.features), // Случайно генерируем особенности
        description: 'Описание объявления',
        photos: window.Util.getRandomArray(Data.photos), // Случайно генерируем фото
      },

      location: {
        x: x,
        y: y,
      },
    };
  }

  function getAds(quantity) {
    var ads = []; // Создаём массив объявлений

    for (var ad = 0; ad < quantity; ad++) {
      var numberAd = ad + 1; // Номер текущего объявления

      ads.push(getAd(numberAd)); // Вставляем в массив текущее объявление
    }

    return ads; // Возвращаем массив
  }

  window.ads = getAds(NUMBER_ADS);
})();

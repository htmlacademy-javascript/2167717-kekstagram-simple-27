import {getRandomIntInclusive, getMaxLengthText, getRandomDescription} from './util';

/**
 * Константы для объекта фото
 */
 const MIN_LIKES = 15;
 const MAX_LIKES = 200;
 const MIN_COMMENTS = 0;
 const MAX_COMMENTS = 200;
 /**
  * Массив с описаниями к фото
  */
 const PHOTOS_DESCRIPTION = [
   'В рестике', 'кодим', 'с собакой', 'с котом', 'делаю сайт', 'до дома пешком',
   'Сложно учиться', 'Учу Java Script', 'Это мой первый программный язык',
   'Я отдыхаю', 'гамаю', 'лежу', 'читаю', 'страдаю', 'в точку смотрю',
   'На улице осень', 'грядут холода', 'Расчехлил сноуборд', 'зима близко', 'друзья',
   'Сейчас бы на пляж, а не вот это вот все', 'вчера на машине проколол колесо',
   'Нужно быть сильным', 'Кекса можно простить', ' заставил меня слишком много учить',
 ];

 /**
  * Создание массива из сгенерированных объектов
  * @param {Number} count - количество генерируемых объектов в созданном массиве
  * @returns {Array} вернется массив объектов
  */
 const createPictureList = (count) => {
   const pictureLists = []; //Создаем пустой массив
   for (let i = 1; i <= count; i++) {
     pictureLists[i - 1] = {
       id: i,
       url:  `photos/${i}.jpg`,
       description: getRandomDescription(),
       likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
       comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),
     };
   };
   return pictureLists;
 };

 export {createPictureList};

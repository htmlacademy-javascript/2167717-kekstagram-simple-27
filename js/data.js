import {getRandomIntInclusive, getRandomDescription} from './mocks/util.js';

/**
 * Константы для объекта фото
 */
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

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
      comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),};
  }
  return pictureLists;
};

export {createPictureList};

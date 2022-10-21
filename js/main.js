/**
 * Константы для объекта фото
 */
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

/**
 * Получение случайного числа в диапазоне
 * @param {Number} firstNumber - первое число
 * @param {Number} secondNumber - второе число
 * @returns {Number} вернется случайное число из диапазона
 */
const getRandomIntInclusive = (firstNumber, secondNumber) => {
  if (firstNumber < 0 || secondNumber < 0) { //Сравнение чисел. Вернется NaN если одно или оба указанных числа отрицательные
    return NaN;
  }
  const lowestNumber = Math.ceil(Math.min(firstNumber, secondNumber)); //Получение наименьшего целого числа среди переданных аргументов
  const greatestNumber = Math.floor(Math.max(firstNumber, secondNumber)); //Получение наибольшего целого числа среди переданных аргументов
  const randomResult = Math.random() * (greatestNumber - lowestNumber + 1) + lowestNumber; //Получение случайного целого числа в заданном диапазона

  return Math.floor(randomResult);
};

getRandomIntInclusive(44, 11);

/**
 * Проверка максимальной длины строки
 * @param {String} checkText - проверяемая строка
 * @param {String} maxLengthText - максимальная длина строки
 * @returns {boolean} вернется проверка длины строки
 */
const getMaxLengthText = (checkText, maxLengthText) => {
  return checkText.length <= maxLengthText
};

getMaxLengthText('Some text', 7);

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
 * @returns {string}  вернется случайное значение из массива в виде строки
 */
const getRandomDescription = () => {
  const randomIndexDescription = Math.floor(Math.random() * PHOTOS_DESCRIPTION.length); //Получение случайного индекса элемента массива
  return PHOTOS_DESCRIPTION[randomIndexDescription];
};
getRandomDescription();


/**
 * Создание массива из сгенерированных объектов
 * @param {Number} count - количество генерируемых объектов в созданном массиве
 * @returns {Array} вернется массив объектов
 */
const createPictureLists = (count) => {
  const pictureLists = []; //Создаем пустой массив
  for (let i = 1; i <= count; i++) {
    pictureList[i - 1] = {
      id: i,
      url:  `photos/${i}.jpg`,
      description: getRandomDescription(),
      likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
      comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),
    };
  };
  return pictureLists;
};

createPictureList(25);
//

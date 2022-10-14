/**
 * Получение случайного числа в диапазоне
 * @param {Number|String} firstNumber - первое число
 * @param {Number|String} secondNumber - второе число
 * @returns {Number|String} вернется случайное число из диапазона
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
 * @param {String|Number} checkText - проверяемая строка
 * @param {String|Number} maxLengthText - максимальная длина строки
 * @returns {boolean} вернется проверка длины строки
 */

const getMaxLengthText = (checkText, maxLengthText) => {
  if (checkText.length <= maxLengthText) { //Сравнение строки и максимальной длины этой строки
    return true; //Длина строки в допустимом диапазоне
  }
  return false; //Длина строки больше допустимого диапазона
};

getMaxLengthText('Some text', 7);


/**
 * @returns {string}  вернется случайное значение из массива в виде строки
 */
const PHOTOS_DESCRIPTION = [//Массив с описаниями к фото
  'В рестике', 'кодим', 'с собакой', 'с котом', 'делаю сайт', 'до дома пешком',
  'Сложно учиться', 'Учу Java Script', 'Это мой первый программный язык',
  'Я отдыхаю', 'гамаю', 'лежу', 'читаю', 'страдаю', 'в точку смотрю',
  'На улице осень', 'грядут холода', 'Расчехлил сноуборд', 'зима близко', 'друзья',
  'Сейчас бы на пляж, а не вот это вот все', 'вчера на машине проколол колесо',
  'Нужно быть сильным', 'Кекса можно простить', ' заставил меня слишком много учить',
];

const getRandomDescription = () =>{
  const randomDescription = Math.floor(Math.random() * PHOTOS_DESCRIPTION.length); //Получение случайного элемента массива
  return PHOTOS_DESCRIPTION[randomDescription];
};
getRandomDescription();


/**
 * Создание массива из сгенерированных объектов
 * @param {Number} count - количество генерируемых объектов в созданном массиве
 * @returns {Array} вернется массив объектов
 */
const createPictureAttribute = (count) => {
  const pictureAttribute = []; //Создаем пустой массив
  for (let i = 1; i <= count; i++) {
    pictureAttribute[i - 1] = {
      id: i,
      url:  `photos/${i}.jpg`,
      description: getRandomDescription(),
      likes: getRandomIntInclusive(15, 200),
      comments: getRandomIntInclusive(0, 200),
    };
  }
  return pictureAttribute;
};

const objectOfPhotos = createPictureAttribute(25);


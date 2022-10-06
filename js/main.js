// Функция поиска случайного целого числа из диапазона
function getRandomIntInclusive(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
    const lower = Math.ceil(Math.min(a, b)); //Поиск минимального числа среди переданных аргументов и его округление
    const upper = Math.floor(Math.max(a, b)); //Поиск максимального числа среди переданных аргументов и его округление
    const result = Math.random() * (upper - lower + 1) + lower; //Поиск случайного целого числа в заданном диапазоне

    return Math.floor(result);
  }

// Функция проверки максимальной длины строки
function getMaxLenghtText(checkText, maxLenghtText) {
  if (checkText.length <= maxLenghtText) {
    return true;
  }
    return false;
  }

// Вызов функций
getRandomIntInclusive(44, 11);
getMaxLenghtText('Some text', 7);

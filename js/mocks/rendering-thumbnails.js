/**
 * Отрисовка миниатюр фотографий пользователей
 * @param {Array} thumbnails — массив данных о фотографиях
 */
const renderThumbnails = (thumbnails) => {
  const container = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content;
  const thumbnailFragment = document.createDocumentFragment();
  thumbnails.forEach((photo) => {
    const clonedTemplate = template.cloneNode(true);
    clonedTemplate.querySelector('.picture__img').src = photo.url;
    clonedTemplate.querySelector('.picture__comments').textContent = photo.comments;
    clonedTemplate.querySelector('.picture__likes').textContent = photo.likes;
    thumbnailFragment.appendChild(clonedTemplate);
  });
  container.appendChild(thumbnailFragment);
};

export {renderThumbnails};

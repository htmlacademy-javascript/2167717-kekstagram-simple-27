import {createPictureList} from './data.js';
import {renderThumbnails} from './mocks/rendering-thumbnails.js';

const PICTURES_COUNT = 25;
createPictureList(PICTURES_COUNT);
renderThumbnails(createPictureList(PICTURES_COUNT));

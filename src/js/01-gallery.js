// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

import { render } from './utilis-gallery';

// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.classList.add('list');

// Render

render(refs.gallery, galleryItems);

// Инициализация библиотеки SimpleLightbox!

const lightbox = new SimpleLightbox('.gallery a', {
  // get the caption from given attribute
  captionsData: 'alt',
  // adds a delay before the caption shows (in ms)
  captionDelay: 250,
});

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({ description, original, preview }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;})
        .join('');
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});
gallery.on('show.simplelightbox', function () {
});


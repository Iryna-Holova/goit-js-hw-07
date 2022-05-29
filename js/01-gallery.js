import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onOpenModal);

function createGalleryMarkup(items) {
    return items
        .map(({ description, original, preview }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;})
        .join('');
}

let modal
function onOpenModal(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
    
    const imageSrc = event.target.getAttribute('data-source');
    const imageAlt = event.target.getAttribute('alt');
    
    modal = basicLightbox.create(`
		<img src="${imageSrc}" alt="${imageAlt}">
	`);
    modal.show();

    window.addEventListener('keydown', modalClose);

    function modalClose(event) {
    if (event.code !== 'Escape') return;
      modal.close();
    window.removeEventListener('keydown', modalClose);
}
}



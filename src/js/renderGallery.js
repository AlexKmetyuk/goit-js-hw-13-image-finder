import refs from "./refs";
import photoCardTpl from '../tampletes/galleryImage.hbs';

function renderGallery(images) {
    const markup = photoCardTpl(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}
export default renderGallery
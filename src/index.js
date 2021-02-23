import './styles.css';
import refs from './js/refs';
import fetchImages from './js/apiService';
import renderGallery from './js/renderGallery'

refs.btnSubmit.addEventListener('click', event => {
    refs.gallery.innerHTML=''
    event.preventDefault()
    fetchImages(refs.input.value)
        .then(images => renderGallery(images))
    refs.loadMoreBtn.classList.toggle("is-hidden")
})

let page = 1

refs.loadMoreBtn.addEventListener('click', event => {
    event.preventDefault()
    page++
    fetchImages(refs.input.value, page)
        .then(images => renderGallery(images))
})


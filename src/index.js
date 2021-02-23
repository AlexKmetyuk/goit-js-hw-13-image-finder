import './styles.css';
import refs from './js/refs';
import fetchImages from './js/apiService';
import renderGallery from './js/renderGallery'

let page = 0;


refs.btnSubmit.addEventListener('click', event => {
    refs.gallery.innerHTML=''
    event.preventDefault()
    page = 1
    fetchImages(refs.input.value)
        .then(images => renderGallery(images))  
    if (page > 1) {
            refs.loadMoreBtn.classList.add("is-hidden")
        } else refs.loadMoreBtn.classList.remove("is-hidden")
    })

refs.loadMoreBtn.addEventListener('click', event => {
    event.preventDefault()
    page++
    fetchImages(refs.input.value, page)
        .then(images => renderGallery(images))
})



import './styles.css';

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

import refs from './js/refs';
import fetchImages from './js/apiService';
import renderGallery from './js/renderGallery'

let page = 0;


refs.btnSubmit.addEventListener('click', event => {
    refs.gallery.innerHTML=''
    event.preventDefault()
    fetchImages(refs.input.value)
        .then(images => {
            renderGallery(images)
            if (images.length > 0) {
                showLoadBtn()
            } else {
                hideLoadBtn()
                error({
                    text: 'Nothing was found! Еnter the correct query!',
                });
            }
        })
})

refs.loadMoreBtn.addEventListener('click', event => {
    event.preventDefault()
    page++
    fetchImages(refs.input.value, page)
        .then(images => {
            renderGallery(images)
            scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            })
        })
})

function showLoadBtn() {
    refs.loadMoreBtn.classList.remove("is-hidden")
}

function hideLoadBtn() {
    refs.loadMoreBtn.classList.add("is-hidden")
}

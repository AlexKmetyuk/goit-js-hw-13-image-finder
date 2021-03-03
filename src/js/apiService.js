const key = '20385561-6a350e58d651a37e998e9aef4'

function fetchImages(value, page) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${key}`)
        .then(res => res.json())
        .then(({hits}) => hits)
}

export default fetchImages
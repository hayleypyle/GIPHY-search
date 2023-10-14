const api_key ="cyOMBw01Y8fyiVDNEYTYZzRSfm0Va4Y2"

let form = document.querySelector('.js-search-form')
let searchInput = document.querySelector('[name=search-name]')
let searchContainer = document.querySelector('.js-container')
let error = document.querySelector('.js-error-container')

function giphySearch(searchTerms){
fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=${api_key}&limit=12`)
.then (data => data.json())
.then( response => {
    if (searchInput.value == " "){
        throw 'Erroneous response'
    } 
    let processedSearch = `<div class="grid-container">` + response.data
    .map(gif =>

    `<div class="grid-item"><iframe src="${gif.embed_url}" 
    width="100%" height="100%" frameBorder="0" class="giphy-embed" 
    allowFullScreen></iframe>
    </div>`
    )
    .join('')+ '</div>';
    error.innerHTML = "";

    searchContainer.innerHTML = processedSearch;
    })
    .catch(err => {
        console.warn(err);
        searchContainer.innerHTML = `<p>Error fetching gifs related to ${search}</p>`
    })
}

function submitSearch(event){
    event.preventDefault();
    let searchTerms = searchInput.value
    if (searchTerms !== "") {
        giphySearch(searchTerms);
        searchInput.value = "";
    } else {
        error.innerHTML = `<p>Please enter a search term.</p>`;
    }
}

form.addEventListener('submit', submitSearch);


const api_key ="cyOMBw01Y8fyiVDNEYTYZzRSfm0Va4Y2"

let form = document.querySelector('.js-search-form')
let searchInput = document.querySelector('[name=search-name]')
let searchContainer = document.querySelector('.js-container')

function giphySearch(searchTerms){
fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=${api_key}&limit=16`)
.then (data => data.json())
.then( response => {
    let processedSearch = `<div class="grid-container">` + response.data
    .map(gif =>

    `<div class="grid-item"><iframe src="${gif.embed_url}" 
    width="250" height="250" frameBorder="0" class="giphy-embed" 
    allowFullScreen></iframe>
    </div>`
    )
    .join('')+ '</div>';
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
    giphySearch(searchTerms);

}

form.addEventListener('submit', submitSearch);


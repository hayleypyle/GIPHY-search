const api_key ="cyOMBw01Y8fyiVDNEYTYZzRSfm0Va4Y2"

let form = document.querySelector('.js-search-form')
let searchInput = document.querySelector('[name=search-name]')

function giphySearch(searchTerms){
return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=${api_key}&limit=20`)
.then(response => console.log(response)
)}

function submitSearch(event){
    event.preventDefault();
    let searchTerms = searchInput.value
    giphySearch(searchTerms);

}

form.addEventListener('submit', submitSearch);


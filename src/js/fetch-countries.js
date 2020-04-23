function fetchCoutries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .catch();
}

export default fetchCoutries;

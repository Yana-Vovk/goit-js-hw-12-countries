const LINK = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
    return fetch(`${LINK}/name/${searchQuery}`)
        .then(response => response.json(),
        );
}

export default { fetchCountries };

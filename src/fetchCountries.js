export {fetchCountries};
import Notiflix from 'notiflix';
function fetchCountries(name) {
    
    
    const url = ` https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
        .then(console.log).catch(error => {
       Notiflix.Notify.failure('Oops, there is no country with that name');
        });
}
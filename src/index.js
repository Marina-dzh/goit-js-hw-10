import './css/styles.css';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
import {fetchCountries} from './fetchCountries'

const refs = {
    input: document.querySelector('[id="search-box"]'),
    list: document.querySelector('.country-list'),
    countryCard: document.querySelector('.country-info'),
    
}

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))


function onSearch(e) {
    const name = refs.input.value.trim();
    if (name === '') {
        console.log('noth')
        return
    }
    console.log(name)
    fetchCountries(name)
    
}
let countriesList = ""




'italy'
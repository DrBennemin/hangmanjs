//Imports
import { countries } from '/data.js'

//Selectors
const list = document.querySelector('#countries')
const countryInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")

//Events
buttonSubmit.addEventListener("click", submitCountry)

//Functions
function submitCountry() {
    event.preventDefault();
    const newGuess = countryInput.value;
    console.log(newGuess);
    countryInput.value = '';
}

countries.forEach((country) => {
    const countryList = document.createElement('div')
    countryList.innerText = country.country;
    list.appendChild(countryList)
})

let randomCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(randomCountry.country);

// var item = items[Math.floor(Math.random() * items.length)];

//Imports
import { countries } from '/data.js'

//Selectors
const list = document.querySelector('#countries')
const countryInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")

//Events
buttonSubmit.addEventListener("click", submitCountry)

//Functions
function matchCountry(userInput) {
    let randomCountry = countries[Math.floor(Math.random() * countries.length)];
    console.log(randomCountry.country);
    if(userInput === randomCountry.country) {
        alert("great");
    } else {
        alert("shit");
    }
}

function submitCountry() {
    event.preventDefault();
    const newGuess = countryInput.value;
    matchCountry(newGuess)
    countryInput.value = '';
}

countries.forEach((country) => {
    const countryList = document.createElement('div')
    countryList.innerText = country.country;
    list.appendChild(countryList)
})

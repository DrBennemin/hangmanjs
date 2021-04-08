//Imports
import { countries } from '/data.js'

//Selectors
const list = document.querySelector('#countries')
const countryInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")
const generatedCountry = document.querySelector(".country")

//Events
buttonSubmit.addEventListener("click", submitCountry)
document.addEventListener("DOMContentLoaded", displayRandomCounty)

//Functions
let randomCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(randomCountry.country);

function displayRandomCounty() {
 let randomCountry = document.createElement("div")
 randomCountry.innerText = randomCountry.country
 randomCountry.appendChild(generatedCountry)
}

function matchCountry(userInput) {
    console.log(randomCountry.country);
    if(userInput.toLowerCase() === randomCountry.country.toLowerCase()) {
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

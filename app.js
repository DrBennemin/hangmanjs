import { countries } from '/data.js'

const list = document.querySelector('#countries')
const countryInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")

buttonSubmit.addEventListener("click", clicktest)

function clicktest() {
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

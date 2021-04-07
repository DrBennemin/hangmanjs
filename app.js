import { countries } from '/data.js'

const list = document.querySelector('#countries')
const buttonSubmit = document.querySelector(".submit")

buttonSubmit.addEventListener("click", clicktest)

function clicktest() {
    event.preventDefault();
    console.log("clikiiiii");
}

countries.forEach((country) => {
    const countryList = document.createElement('div')
    countryList.innerText = country.country;
    list.appendChild(countryList)
    // console.log(country.country)
})

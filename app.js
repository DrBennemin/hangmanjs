import { countries } from '/data.js'

const list = document.querySelector('#countries')

countries.forEach((country) => {
    const countryList = document.createElement('div')
    countryList.innerText = country.country;
    list.appendChild(countryList)
    console.log(country.country)
})

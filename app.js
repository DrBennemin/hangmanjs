//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)]
let splitRandomItem = [...randomItem.item]

//Selectors
const detaiList = document.querySelector('#items')
const itemInput = document.querySelector('.input')
const buttonSubmit = document.querySelector('.submit')
//const randomItemP = document.querySelector('.random-item-p')
const randomItemDiv = document.querySelector('#random-item')
const buttonVisible = document.querySelector('#visible')

//Events
buttonSubmit.addEventListener('click', submitItem)
buttonVisible.addEventListener("click", toggleVisibility)
document.addEventListener('DOMContentLoaded', displayRandomItem)

//Functions
items.forEach((item) => {
    const itemList = document.createElement('div')
    itemList.innerText = item.item
    detaiList.appendChild(itemList)
})

function displayRandomItem() {
    console.log(randomItem.item)
    let singleLetterRandomItem = [...splitRandomItem]
    singleLetterRandomItem.forEach(function (letter) {
        let randomItemLetter = document.createElement('p')
        randomItemLetter.innerText = letter
        randomItemLetter.classList.add('px-2', 'underline', 'random-item-p')
        randomItemDiv.appendChild(randomItemLetter)
    })
}

function toggleVisibility() {
    const randomItemP = document.querySelector('.random-item-p')
    randomItemP.classList.toggle("invisible")
}

function matchItem(userInput) {
    if (userInput.toLowerCase() === randomItem.item.toLowerCase()) {
        alert('great')
    } else {
        alert('shit')
    }
}

function submitItem() {
    event.preventDefault()
    const newGuess = itemInput.value
    matchItem(newGuess)
    itemInput.value = ''
}

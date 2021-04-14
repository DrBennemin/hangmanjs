//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)]
let splitRandomItem = [...randomItem.item]

//Selectors
const detaiList = document.querySelector('#items')
const randomItemDiv = document.querySelector('#random-item')
const buttonVisible = document.querySelector('#visible')
const userInput = document.querySelector('#userInput')

//Events
buttonVisible.addEventListener("click", toggleVisibility)
document.addEventListener('DOMContentLoaded', displayRandomItem)
userInput.addEventListener('keyup', submitItem)

//Functions
items.forEach((item) => {
    const itemList = document.createElement('div')
    itemList.innerText = item.item
    detaiList.appendChild(itemList)
})

function displayRandomItem() {
    let singleLetterRandomItem = [...splitRandomItem]
    singleLetterRandomItem.forEach(function (letter) {
        let randomItemLetter = document.createElement('p')
        randomItemLetter.innerText = letter
        randomItemLetter.classList.add('px-2', 'underline', 'random-item-p', "invisible")
        randomItemDiv.appendChild(randomItemLetter)
    })
}

function toggleVisibility() {
    const randomItemP = document.querySelector('.random-item-p')
    randomItemP.classList.toggle("invisible")
}

function matchLetter(userInput) {
    let letter = userInput.target.value.toLowerCase();
    console.log(letter);
    console.log(splitRandomItem);
    if (splitRandomItem.includes(letter)) {
        console.log("letter is in the word");
        const randomItemP = document.querySelector('.random-item-p')
        randomItemP.classList.replace("invisible", "visible")
        console.log("classlist got replaced");
    } else {
        console.log("not");
    }
}

function submitItem(value) {
    event.preventDefault()
    matchLetter(value)
    userInput.value = ""
}





/*
-show user input in console
-save into var
-match letter from userinput w letter from randomItem
*/

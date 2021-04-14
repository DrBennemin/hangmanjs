//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)]
let splitRandomItem = [...randomItem.item]

//Selectors
const detaiList = document.querySelector('#items')
//const buttonSubmit = document.querySelector('.submit')
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
        let randomItemP = document.createElement('p')
        let randomItemBorderBottom = document.createElement('div')
        randomItemP.innerText = letter
        randomItemP.classList.add('px-2', 'random-item-letter' , 'invisible')
        randomItemBorderBottom.classList.add('border-b', 'border-white', 'visible')
        randomItemDiv.appendChild(randomItemP)
        randomItemP.appendChild(randomItemBorderBottom)
    })
}

function toggleVisibility() {
    const randomItemP = document.querySelector('.random-item-letter')
    randomItemP.classList.toggle("invisible")
}

function matchLetter(userInput) {
    let newGuess = userInput.target.value
    let positionInArray = splitRandomItem.indexOf(newGuess)
    console.log(positionInArray);
    console.log(newGuess);
    if (positionInArray >= 0) {
        console.log("letter is in the word");
        console.log(splitRandomItem.indexOf(newGuess));
        //pTagWithClassInvisible[positionInArray].classList.replace("invisible", "visible")
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

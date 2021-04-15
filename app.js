//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)]
let splitRandomItem = [...randomItem.item]

//Selectors
const detaiList = document.querySelector('#items')
//const buttonSubmit = document.querySelector('.submit')
const randomItemDiv = document.querySelector('#random-item')
const userInput = document.querySelector('#userInput')
const randomItemP = document.getElementsByClassName('random-item-letter')

//Events
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

function matchLetter (userInput) {
    let newGuess = userInput.target.value
    for (let index = 0; index < splitRandomItem.length; index ++) {
        if(splitRandomItem[index] == newGuess) {
            console.log(randomItemP);
            randomItemP[index].classList.replace("invisible", "visible")
            console.log(index);
        } else {
            console.log(`Der Buchstabe ${newGuess} ist an dieser Stelle im Wort nicht enthalten`);
        }
    }
}


function submitItem(value) {
    event.preventDefault()
    matchLetter(value)
    userInput.value = ""
}

/* 
Als nächstes will ich das keyup event gegen ein submit - 
enter event ablösen und das uppercaseproblem
angehen, vielleicht dann mit clientside validation 
noch was machen und dann geht es ab
erst müssen die falseGuesses gespeichert werden und 
angezeigt werden und dann geht es dem strichmännchen an den kragen
*/
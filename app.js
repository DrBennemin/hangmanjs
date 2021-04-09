//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)];
let splitRandomItem = randomItem.item
console.log(randomItem.item);
console.log([...splitRandomItem]);

//Selectors
const detaiList = document.querySelector('#items')
const itemInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")
const randomItemDiv = document.querySelector("#random-item")

//Events
buttonSubmit.addEventListener("click", submitItem)
document.addEventListener("DOMContentLoaded", displayRandomItem)

//Functions
function displayRandomItem() {
    let randomItemP = document.createElement("p")
    randomItemP.innerText = splitRandomItem
    randomItemDiv.appendChild(randomItemP)
}

function matchItem(userInput) {
    console.log(randomItem.item);
    if(userInput.toLowerCase() === randomItem.item.toLowerCase()) {
        alert("great");
    } else {
        alert("shit");
    }
}

function submitItem() {
    event.preventDefault();
    const newGuess = itemInput.value;
    matchItem(newGuess)
    itemInput.value = '';
}

items.forEach((item) => {
    const itemList = document.createElement('div')
    itemList.innerText = item.item;
    detaiList.appendChild(itemList)
})

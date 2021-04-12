//Imports
import { items } from '/data.js'

//Logic
let randomItem = items[Math.floor(Math.random() * items.length)];
let splitRandomItem = [...randomItem.item]

//Selectors
const detaiList = document.querySelector('#items')
const itemInput = document.querySelector(".input")
const buttonSubmit = document.querySelector(".submit")
const randomItemDiv = document.querySelector("#random-item")

//Events
buttonSubmit.addEventListener("click", submitItem)
document.addEventListener("DOMContentLoaded", displayRandomItem)

//Functions
items.forEach((item) => {
    const itemList = document.createElement('div')
    itemList.innerText = item.item;
    detaiList.appendChild(itemList)
})

function displayRandomItem() {
    console.log(randomItem.item);
    let singleLetterRandomItem = [...splitRandomItem]
    singleLetterRandomItem.forEach(function(letter) {
        let randomItemP = document.createElement("p")
        randomItemP.innerText = letter
        randomItemP.classList.add("px-2", "underline", "invisible")
        randomItemDiv.appendChild(randomItemP)
        console.log(randomItemP.classList);
        //Jetzt kann ich mir die css klassen der einzelnen Items anzeigen lassen. Ich muss nur noch heraus finden wie ich diese beeinflussen kann.
    })
}

function toggleVisibility() {
    // if(randomItemDiv.classList === "invisible" ){

    // }
}

function matchItem(userInput) {
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

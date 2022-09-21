// -------------elements of form------------
const nameInput = document.querySelector("#name");

const genderInput = document.querySelector("#gender");

const raceInput = document.querySelector("#race");

const classInput = document.querySelector("#class");


//-----------elements of character sheet-----------
const characterName = document.querySelector("#char-name");

const characterGender = document.querySelector("#char-gender");

const characterRace = document.querySelector("#char-race");

const characterClass = document.querySelector("#char-class");


//-----------add input events to elements to update character sheet------------

// name input
nameInput.addEventListener("input", (event) => { //arrow function , only used here
    characterName.textContent = event.target.value;
});

// gender
genderInput.addEventListener("input", (event) => {
    if (event.target.value === "female") {
        characterGender.innerHTML = `<i class="fa-solid fa-venus"></i>`
    } else if (event.target.value === "male"){
        characterGender.innerHTML = `<i class="fa-solid fa-mars"></i>`
    }
});

// race
raceInput.addEventListener("input", (event) => {
    switch (event.target.value) {
        case "unicorn":
            characterRace.innerHTML = `<img src="images/unicorn.png">`;
            break;
        case "fairy":
            characterRace.innerHTML = `<img src="images/fairy.png">`;
            break;
        case "dragon":
            characterRace.innerHTML = `<img src="images/dragon.png">`;
            break;
        case "mermaid":
            characterRace.innerHTML = `<img src="images/mermaid.png">`;
            break;
        case "witch":
            characterRace.innerHTML = `<img src="images/witch.png">`;
            break;
        default:
            break;
    }
});

// class
classInput.addEventListener("input", (event) => {
    let inputValue = event.target.value;
    const createClassElement = function (val) {
        return`
        <img src="images/${val}.png">
        <span>${val}</span>
        `
    };
    characterClass.innerHTML = createClassElement(inputValue);

});

/* classInput.addEventListener("input", (event) => {
    switch (event.target.value) {
        case "bard":
            characterClass.innerHTML = `
            <img src="images/guitar.png">
            <span>bard</span>
            `;
            break;
        case "monk":
            characterClass.innerHTML = `<img src="images/monk.png">`;
            break;
        case "wizard":
            characterClass.innerHTML = `<img src="images/wizard.png">`;
            break;
        case "fighter":
            characterClass.innerHTML = `<img src="images/sword.png">`;
            break;
        case "ranger":
            characterClass.innerHTML = `<img src="images/ranger.png">`;
            break;
        default:
            break;
    }
}) */



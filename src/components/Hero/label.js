const arrayText = [
    "Máquina de lavar",
    "Iphone 17 barato!",
    "Carros até 30 mil"
];

const writeTime = 100;
const removeTime = 50;
const pauseTime = 1000;

let indexSentence = 0;
let indexChar = 0;

let isUserTyping = false;

const element = document.querySelector("#text");

function writeText() {

    if (isUserTyping) return;

    if (indexChar <= arrayText[indexSentence].length) {
        element.placeholder = arrayText[indexSentence].substring(0, indexChar);
        indexChar++;
        setTimeout(writeText, writeTime);
    } else {
        setTimeout(removeText, pauseTime);
    }
}

function removeText() {

    if (isUserTyping) return;

    if (indexChar > 0) {
        element.placeholder = arrayText[indexSentence].substring(0, indexChar);
        indexChar--;
        setTimeout(removeText, removeTime);
    } else {
        indexSentence = (indexSentence + 1) % arrayText.length;
        indexChar = 0;
        setTimeout(writeText, pauseTime);
    }
}


element.addEventListener("input", () => {
    isUserTyping = true;
});


element.addEventListener("blur", () => {
    isUserTyping = false;
    writeText();
});


writeText();
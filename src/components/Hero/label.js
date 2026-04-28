const arrayText = [
    "Máquina de lavar",
    "Iphone 17 mais barato!"
];

const writeTime = 100;
const removeTime = 50;
const pauseTime = 1000;

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar++;
        setTimeout(writeText, writeTime);
    } else {
        setTimeout(removeText, pauseTime);
    }
}

function removeText() {
    if (indexChar > 0) {
        element.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar--;
        setTimeout(removeText, removeTime);
    } else {
        indexSentence++;

        if (indexSentence >= arrayText.length) {
            indexSentence = 0;
        }

        indexChar = 0;

        setTimeout(writeText, pauseTime);
    }
}

writeText();
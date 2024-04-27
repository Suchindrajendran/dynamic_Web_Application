
let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let cloudContainerEle = document.getElementById("wordsContainer");

let errorMsgEle = document.getElementById("errorMsg");
errorMsgEle.classList.add("error-msg");


let userInputEl = document.getElementById("userInput");

function appendWordToWordCloud(userEnteredWord) {
    let randomSize = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");
    wordEl.textContent = userEnteredWord;
    wordEl.style.fontSize = randomSize;
    wordEl.classList.add("m-3", "mt-5");
    cloudContainerEle.appendChild(wordEl);

}

for (let word of wordCloud) {
    appendWordToWordCloud(word);
}

function onaddWordToCloud() {
    let userEnteredWord = userInputEl.value;

    if (userEnteredWord === "") {
        errorMsgEle.textContent = "Please enter a word";
    } else {
        userInputEl.value = "";
        errorMsgEle.value = "";
        appendWordToWordCloud(userEnteredWord);
    }
}
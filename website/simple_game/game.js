let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userEnteredElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulation! You got it right.";
let tryAgainMessae = "Please try again";

function check() {
    let firstNumInteger = parseInt(firstNumberElement.textContent);
    let secondNumInteger = parseInt(secondNumberElement.textContent);
    let userEnteredNum = parseInt(userEnteredElement.value);

    let sumOfTwoNum = firstNumInteger + secondNumInteger;
    if (sumOfTwoNum === userEnteredNum) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessae;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    let firstRandomNum = Math.random() * 100;
    let secondRandomNum = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNum);
    secondNumberElement.textContent = Math.ceil(secondRandomNum);

    gameResultElement.textContent = "";
    userEnteredElement.value = "";
}
restart();
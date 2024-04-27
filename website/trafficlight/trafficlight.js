
let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stop() {
    stopButton.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function ready(){
    readyButton.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    stopButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function go() {
    goButton.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
    readyButton.style.backgroundColor = "#1f1d41";
    stopButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
}
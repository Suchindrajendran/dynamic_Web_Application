
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatBot() {

    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container", "mr-5");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatBot();
}

function getReplyFromChatBot() {
    let noOfMsg = chatbotMsgList.length;

    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfMsg) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = chatBotMsg;
    userMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(userMsgEl);

}
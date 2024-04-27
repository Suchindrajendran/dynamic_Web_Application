
let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let errorMessageElement = document.getElementById("errorMessage");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessage = "Please Enter a Valid Input.";

function calculate() {
    let billAmount = billAmountElement.value;
    let percentageTip = percentageTipElement.value;

    let errorMessage = "Please Enter a Valid input";
    if (billAmount === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTip === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        percentageTip = parseInt(percentageTip);
        billAmount = parseInt(billAmount);
        let calculateTipAmount = (percentageTip / 100) * billAmount;
        let calculatetotalAmount = billAmount + calculateTipAmount;
        tipAmountElement.value = calculateTipAmount;
        totalAmountElement.value = calculatetotalAmount;
    }
}
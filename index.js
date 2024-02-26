// .checked = property that determine the check state ofan html checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = "You have subscribed";
    } else {
        subResult.textContent = "You have not subscribed";
    }
    if (visaBtn.checked) {
        paymentResult.textContent = "You chose Visa";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You chose Master Card";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You chose Pay Pal";
    }
    else{
        paymentResult.textContent = "Please select a payment method";
    }
}
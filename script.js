var birthday = document.querySelector(".dob-input")
var luckyNumber = document.querySelector(".luckynumber-input");
var luckyBtn = document.querySelector("#check-btn");
var displayMessage = document.querySelector("#result-message");

function isLucky(dob, lucky_dob) {
    var sum = 0;
    for (var i = 0; i < dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    if (sum % lucky_dob == 0) {
        showMessage("🥳 Your birthday is lucky 🥳");
    } else {
        showMessage("Sorry buddy, your birthday isn't lucky");
    }
}

function formatInputs(dob, luckydob) {
    dob = dob.replaceAll("-", "");
    isLucky(dob, luckydob);
}

function getNumbers() {
    var dob = birthday.value;
    var luckydob = luckyNumber.value;
    if (dob && luckydob) {
        if (luckydob > 0) {
            formatInputs(dob, luckydob);
        } else {
            showMessage("😟 Only Positive numbers allowed")
        }
    } else {
        showMessage("Oops! fill all fields")
    }
}

function showMessage(userMessage) {
    displayMessage.innerHTML = userMessage
}
luckyBtn.addEventListener("click", getNumbers);
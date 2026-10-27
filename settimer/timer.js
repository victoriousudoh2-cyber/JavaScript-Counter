
let count = 0;
let intervalId = null;

const countDisplay = document.getElementById("count");
const message = document.getElementById("message");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timeoutButton = document.getElementById("timeout");

// Display the counter
function updateCount() {
    countDisplay.textContent = count;
}

// Plus button
plusButton.addEventListener("click", function () {
    count++;
    updateCount();
});

// Minus button
minusButton.addEventListener("click", function () {
    count--;
    updateCount();
});

// setInterval: increase count every second
startButton.addEventListener("click", function () {
    if (intervalId !== null) {
        return;
    }

    message.textContent = "Counting every second...";

    intervalId = setInterval(function () {
        count++;
        updateCount();
    }, 1000);
});

// Stop setInterval
stopButton.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;

    message.textContent = "Interval stopped.";
});

// setTimeout: display a message after 3 seconds
timeoutButton.addEventListener("click", function () {
    message.textContent = "Waiting for 3 seconds...";

    setTimeout(function () {
        message.textContent = "Your 3 seconds are over!";
    }, 3000);
});


let count = 0;

const countDisplay = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

// Increase the number
plusButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

// Decrease the number
minusButton.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

// Reset the number to zero
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

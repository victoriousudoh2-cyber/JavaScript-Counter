//let count = 0;

//const countDisplay = document.getElementById("count");
//const plusButton = document.getElementById("plus");
//const minusButton = document.getElementById("minus");

//plusButton.addEventListener("click", function () {
  //  count = count + 1;
 //   countDisplay.textContent = count;
//});

//minusButton.addEventListener("click", function () {
  //  count = count - 1;
    //countDisplay.textContent = count;
//});



let count = 0;
let timer = null;

const countDisplay = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

// Display the current count
function updateCounter() {
    countDisplay.textContent = count;
}

// Add one
plusButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Remove one
minusButton.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Start automatic counting
startButton.addEventListener("click", function () {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        count++;
        updateCounter();
    }, 1000);
});

// Stop automatic counting
stopButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

// Show a welcome message once after 3 seconds
setTimeout(function () {
    console.log("Welcome to my counter!");
}, 3000);

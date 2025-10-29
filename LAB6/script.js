let display = document.getElementById('display');

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid Input');
        clearDisplay();
    }
}
// Get the display element
const display = document.getElementById('display');

// Append input to the display
function appendToDisplay(input){
    display.value += input;
}

// Clear the display
function clearDisplay(){
    display.value = '';
}

// Calculate the result of the expression in the display
function calculate(){
    try{
        // Evaluate the expression and update the display
        display.value = eval(display.value);
    }
    catch(error){
        // Display error message if evaluation fails
        display.value = 'Error';
    }
}
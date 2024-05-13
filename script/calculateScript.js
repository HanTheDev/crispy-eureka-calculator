// Function to add digit to display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to perform calculation
function calculate() {
    let expression = document.getElementById('display').value;
    console.log(expression)
    try {
        // Menggunakan fungsi bawaan dari javascript yaitu eval
        let result = eval(expression); 
        document.getElementById('display').value = result;
    }
    catch(error) {
        document.getElementById('display').value = "Input invalid"
    }
    
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

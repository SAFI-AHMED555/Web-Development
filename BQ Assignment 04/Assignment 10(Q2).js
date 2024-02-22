// Define the array of numbers
var numbers = [1, 2, 3, 4, 5];

// Output the current array
function outputArray() {
    var result = document.getElementById("main");
    result.style.margin = "80px " ; 
    result.textContent = "Array: " + numbers.join(", ");
}

// Add an element to the array
function addElement() {
    var number = parseInt(prompt("Enter number to add:"));
    numbers.push(number);
    outputArray();
}

// Remove an element from the array
function removeElement() {
    var index = parseInt(prompt("Enter the index to remove:"));
    if (index >= 0 && index < numbers.length) {
        numbers.splice(index, 1);
        outputArray();
    } else {
        alert("Invalid index!");
    }
}

// Find the index of an element in the array
function findIndex() {
    var num1 = parseInt(prompt("Enter a number to find:"));
    var index = numbers.indexOf(num1);
    if (index !== -1) {
        alert("Index of " + num1 + " is " + index);
    } else {
        alert(num1 + " not found in the array!");
    }
}

// Attach event listeners to the buttons
document.getElementById("add-button1").addEventListener("click", addElement);
document.getElementById("remove-button2").addEventListener("click", removeElement);
document.getElementById("find-button3").addEventListener("click", findIndex);

// Initial output
outputArray();
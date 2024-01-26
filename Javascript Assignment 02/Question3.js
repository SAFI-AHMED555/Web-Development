let number = prompt("Enter a number:");
var multiple = Number(number);
console.log("----> Multiplication table of: "+ number + " <----" );
for (let i = 1; i <= 10; i++) {
    let result = i * number;
    console.log(number + " * " + i + " = " + result);
}

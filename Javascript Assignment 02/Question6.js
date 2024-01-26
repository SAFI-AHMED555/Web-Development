function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}
let userNumber = prompt("Enter a positive integer to check if it's prime:");
userNum = Number(userNumber);
if (isPrime(userNumber)) {
    // alert(`${userNumber} is a prime number!`);
    alert(userNumber + " is a Prime number!");
} else {
    alert(userNumber + " is not a Prime number!");
}

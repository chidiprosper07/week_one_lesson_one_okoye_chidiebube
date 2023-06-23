let num1 = 5;
let num2 = 10;

// Printing values and debugging
console.log("Starting the calculation...");
console.log("num1:", num1);
console.log("num2:", num2);

let sum = num1 + num2;
console.log("Sum:", sum);

// Displaying warnings and error messages
if (num1 > num2) {
  console.warn("num1 is greater than num2. This might cause unexpected results.");
}

if (num2 === 0) {
  console.error("Division by zero is not allowed.");
} else {
  let division = num1 / num2;
  console.log("Division:", division);
}

console.log("Calculation complete.");

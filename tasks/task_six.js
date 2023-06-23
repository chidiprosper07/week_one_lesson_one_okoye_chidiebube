// Convert a string to a number using parseInt() or parseFloat()
let stringNumber = "123";
let integerNumber = parseInt(stringNumber);
let floatNumber = parseFloat(stringNumber);

console.log("String to Integer:", integerNumber);
console.log("String to Float:", floatNumber);

// Convert a number to a string using the toString() method or string concatenation
let number = 123;
let string1 = number.toString();
let string2 = number + "";

console.log("Number to String (toString()):", string1);
console.log("Number to String (string concatenation):", string2);

// Convert a string to an array using the split() method
let string = "okoye, chidiebube!";
let array = string.split("");

console.log("String to Array:", array);

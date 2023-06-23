let person = "John Doe";
let age = 30;
let isTrue = true;
let isFalse = false;
let emptyArray = [];
let nullValue = null;
let undefinedValue = undefined;

// Type checking using typeof operator
console.log("Type of name:", typeof person);
console.log("Type of age:", typeof age);
console.log("Type of isTrue:", typeof isTrue);
console.log("Type of isFalse:", typeof isFalse);
console.log("Type of emptyArray:", typeof emptyArray);
console.log("Type of nullValue:", typeof nullValue);
console.log("Type of undefinedValue:", typeof undefinedValue);

// Value comparison using equality (==) and strict equality (===) operators
console.log("Equality comparison:", 10 == "10");        // true
console.log("Strict equality comparison:", 10 === "10"); // false

// Truthy and falsy values
if (isTrue) {
  console.log("isTrue is truthy");
}

if (!isFalse) {
  console.log("isFalse is falsy");
}

if (emptyArray) {
  console.log("emptyArray is truthy");
}

if (!nullValue) {
  console.log("nullValue is falsy");
}

if (!undefinedValue) {
  console.log("undefinedValue is falsy");
}

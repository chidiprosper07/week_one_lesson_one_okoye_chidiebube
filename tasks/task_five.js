let person = {  // Creating an object called 'person'
    name: "John Doe",
    age: 25,
    location: "New York"
  };
  
  // Accessing and printing the values of specific properties
  console.log("Name:", person.name);
  console.log("Age:", person["age"]);
  console.log("Location:", person["location"]);
  
  // Adding or updating properties using dot notation or bracket notation
  person.job = "Engineer";        // Adding a new property using dot notation
  person["hobby"] = "Photography"; // Adding a new property using bracket notation
  person.age = 30;                // Updating the value of an existing property using dot notation
  person["location"] = "San Francisco"; // Updating the value of an existing property using bracket notation
  
  // Printing the updated object
  console.log("Updated Object:", person);
  
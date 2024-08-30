function getPerson(person) {
    try {
        // Check if person is a valid object with 'name' and 'age' properties
        if (typeof person !== 'object' || person === null || !person.name || !person.age) {
            throw new Error('Invalid parameter type');
        }
        
        // Return the formatted string
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        // Return the error message
        return error.message;
    }
}

// Examples
console.log(getPerson({ name: "Alice", age: 30 })); // "Name: Alice, Age: 30"
console.log(getPerson({ name: "Bob" })); // "Invalid parameter type"
console.log(getPerson("not an object")); // "Invalid parameter type"
console.log(getPerson(null)); // "Invalid parameter type"
console.log(getPerson({ name: "Charlie", age: "thirty" })); // "Name: Charlie, Age: thirty"

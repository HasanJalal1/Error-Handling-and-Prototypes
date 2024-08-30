function convertToNumber(inputString) {
    try {
        let number = Number(inputString);
        if (isNaN(number)) {
            throw new Error('Invalid number');
        }
        return number;
    } catch (error) {
        return 'Invalid number';
    }
}

// Examples
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("45.67")); // 45.67
console.log(convertToNumber("abc")); // "Invalid number"
console.log(convertToNumber("")); // "Invalid number"
console.log(convertToNumber("123abc")); // "Invalid number"
console.log(convertToNumber("abc")); //"Invalid number"

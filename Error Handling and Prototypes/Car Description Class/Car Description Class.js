class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
}

// Instantiate an instance of the Car class
const myCar = new Car('Skoda', 'Rapid', 2022);

// Call the getDescription method
console.log(myCar.getDescription()); // "This is a 2021 Toyota Corolla"

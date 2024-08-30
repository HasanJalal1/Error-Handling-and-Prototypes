class person {
    constructor(name="unknown", age=0) {
        this.name = name;
        this.age = age;
    }
    getdetail() {
        return `Name: ${this.name} Age: ${this.age}.`;
    }
}
let person1= new person("Mithun", 20);
console.log(person1.getdetail());

let person2 = new person();
console.log(person2.getdetail());
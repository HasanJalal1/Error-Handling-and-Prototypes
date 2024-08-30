function Student(name){
    this.name=name;
}
Student.prototype.printDetails=function(){
    console.log(`Hello, My name is ${this.name}`);
};

const student = new Student("Mithun");
student.printDetails();
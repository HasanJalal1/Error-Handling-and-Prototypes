class employee{
    constructor (name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getsalary(){
        return this.salary;
    }

}

let employee1 = new employee("Prabir Kumar","software Engineer", 80000);

console.log(employee1.getsalary());
class Employee {
  constructor (name, id, wage){
    this.name = name;
    this.id = id;    
    this.wage = wage;
  }
  payRaise(){
    return this.wage = (this.wage *2).toFixed(2);
  }
}
class Manager extends Employee{
  constructor(name, id, wage, underlings){
  super(name, id,wage);
  this.underlings = [];
  }
  addEmployee(emp){
    return this.underlings.push(emp);
  }
  // Still need to figure out how to point 
  removeEmployee(id){
   let ourWorker = this.underlings;
   let index = ourWorker.findIndex();
   this.underlings.splice(index, 1);
  }
}

let emp1 = new Employee("Adam", 1, "08/30/21", "Customer Service", 15);
let emp2 = new Employee("John", 2, "08/30/21", "Engineer", 25);

let man1 = new Manager("Bob", 6, "05/05/05", "Manager", 54);

man1.addEmployee(emp1);
man1.addEmployee(emp2);
console.log(man1);
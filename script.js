//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age=age;
	}
    set age(newAge){
      this.age=newAge;
    }
    get name(){
      return this.name;
    }
}

class Student extends Person {
    constructor(name, age, ){
        super(name, age);
    }
    study = ()=>{
        console.log(this.name + "is studying");
    }
}

class Teacher extends Person {
    constructor(name,age){
        super(name, age);
    }
    teach=()=>{
        console.log(this.name + "is teaching");
    }
}
let p = new Person("Adarsh, 25");
console.log(p.name)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age=age;
	}
    set age1(ageValue){
        console.log(this.age);
    }
    get name1(){
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
Person.name1="Adarsh";
console.log(Person.name1)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
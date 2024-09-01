class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

    set age(newAge){
        this._age = newAge;
    }
    
    get name(){
        return this._name;
    }
}

class Student extends Person {
    constructor(name, age){
        super(name, age);
    }
    
    study(){
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    constructor(name, age){
        super(name, age);
    }
    
    teach(){
        console.log(this.name + " is teaching");
    }
}

let p = new Person("Adarsh", 25);
console.log(p.name); // "Adarsh"

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
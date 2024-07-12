//Create a class Person with properties name and age. Add a method to introduce the person.

class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    introduction() {
        return `My name is ${this.name}, and I am ${this.age} years old`
    }
}

const person1 = new Person('Sally', 30)
console.log(person1.introduction());

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor (name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets; 
    this.residence = residence; 
    this.hobbies = hobbies; 
    }

    addHobby(hobby){
        this.hobbies.push(hobby); 
    }

    removeHobby(hobby){
        let foundIdx = this.hobbies.indexOf(hobby); 
        let valuesBefore = this.hobbies.slice(0, foundIdx); 
        let valuesAfter = this.hobbies.slice(foundIdx + 1); 
        
        this.hobbies = valuesBefore.concat(valuesAfter);
    }

    gretting(){
        console.log("Hello fellow person!");
    }

    // override the Object.prototype to string method
    toString(){
        return Object.values(this).toString; 
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation; 
    }
    greeting(){
        console.log("Hello, I am a coder!");
    }
} 

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let coder = new Coder ("Ben", 0, "Birmingham", ["running", "diy", "reading"], "Full Stack Web Developer");

coder.addHobby("art");
coder.removeHobby("diy");

console.log(coder);

console.log(coder.toString());

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    result = 0; 

    add(a, b){
        this.result = a + b; 
        return this.result;
    }

    substract (a, b) {
        this.result = a - b; 
        return this.result;
    }

    multiply (a, b) {
        this.result = a * b; 
        return this.result;
    }

    divide (a, b) {
        this.result = a / b; 
        return this.result;
    }

    display () {
        console.log(this.result);
    }
}

let cal = new Calculator (); 

cal.add(0,1)
cal.display() 
cal.substract(5, 3)
cal.display()
cal.multiply(1, 3)
cal.display()
dd
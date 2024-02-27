//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let values in person3){
    console.log(person3[values])

}

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    printPersonInfo(){
        return `Hi my name is ${this.name} and I\'m ${this.age} years old`
    }
    addAge(){
        this.age += 1
    }

}

const person2 = new Person('Matthew', 27)

const person4 = new Person('Tez', 33)

console.log(person2.printPersonInfo())
console.log(person4.printPersonInfo())

person2.addAge()
person2.addAge()
person2.addAge()
person4.addAge()

console.log(person2.printPersonInfo())
console.log(person4.printPersonInfo())
// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
const url = 'http://ergast.com/api/f1/2008/5/driverStandings.json'
fetch(url)
    .then(response => {
        return response.json();


    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })



// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
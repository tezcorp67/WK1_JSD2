// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/

// JS Objects (Python Dicts)
let num = 1
switch(num % 2 == 0){
  case true:
    console.log('Even')
    break;
    default:
      console.log('Odd')
}

let temp = 62

switch(temp){
  case temp < 60:
    console.log('Kinda chilly it\'nit')
    break;
    case temp < 80:
      console.log('Kinda nice')
      break;
      default:
        console.log('Hot it is')
}


const person = {
  name: 'Christian',
  age: 197,
  location: 'Covid-Town'
}

console.log(person['name'])

// access data in objects (using bracket or dot notation)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:

// JS Object methods ((Object.keys(object), Object.values(object))

// looping an object using for in
// for in: iterates over keys in object or indices in an array



// ---------- Creating a JS Class ----------

// Creating an instance

// Inheriting from a class using 'extends'


// ---------- JS Closures ----------

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
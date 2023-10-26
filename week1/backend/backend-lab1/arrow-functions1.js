// Regular function
function sayHello() {
    return "Hello, world!";
}

// arrow function
const sayHelloArrow = () => "Hello, world!";

// Regular function
function double(x) {
    return x * 2;
}

// arrow function
const doubleArrow = x => x * 2;

// Regular function
function add(x, y) {
    return x + y;
}

// arrow function
const addArrow = (x, y) => x + y; // note need to have () when multiple parameters

// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

// arrow function
const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" // note this.name is undefined
};

const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});

// arrow function
const doubledArrow = [];
numbers.forEach(num => doubledArrow.push(num * 2));

// more comments for testing
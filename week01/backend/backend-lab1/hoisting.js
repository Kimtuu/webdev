// 1.
const cube = x => x * x * x;

// 2.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// 3.
const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 4.
const sumCubes = numbers => {
    let sum = 0;
    numbers.forEach(number => sum += cube(number));
    return sum;
}

// part 2 
/*
1. using var hoists the variable to the top of the function,
but log is used before message is declared.

2. using let does not hoist the variable to the top of the function,
so when using log before message is declared, it throws an error.

3. in this code snippet we call a expred function before it is declared,
meaning the function is not hoisted and it throws an ReferenceError.

4. in this code snippet we call a declared function, which gets hoisted
to the top, so it works.
*/

// 1.
// for(var i = 0; i < values.length; i++){
//     console.log(values[i]);
//   }
  
//   var values = [10, 20, 30];

// lets correct this code snippet
var values = [10, 20, 30];
// we declare var first, then we can use its contents
for(var i = 0; i < values.length; i++){
    console.log(values[i]);
  }
/* 


// 2.
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

var lastLogin = '1/1/1970';
*/

// lets correct this code snippet 2.
var lastLogin = '1/1/1970';
// we declare var first, then we can use its contents

console.log(welcome('Charlie', 'Munger'));
// we can call the function before its declared, because it gets hoisted to the top

// declared function
function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

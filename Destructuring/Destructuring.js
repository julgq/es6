// Destructuring ES6.

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6 Refactoring:
const { type, amount, xyz } = expense;

type;
amount;
xyz; // undefind

"...."

// Otra caracteristica de Destrucutring en ES6. Objects:

var saveField = {
extension: '.jpg',
name: 'repost',
size: 14040
};

function fileSummary(file) {
return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(saveField);

// Refactoring:
function fileSummary2({name, extension, size}, { color }) {
return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary2(saveField, {color: 'red'});


"----"
// Otro ejemplo: Arrays:

const companies = [
'Google',
'Facebook',
'Uber'
];


const [ name, name2, name3 ] = companies;
name;
name2;
name3;

// Ejemplo interesante:
const [ name1, ...rest ] = companies;
rest;


// Otros ejemplos:

const companies2 = [
{ name: 'Google', location:'Montain View' },
{ name: 'Facebook', location: 'Menlo Park' },
{ name: 'Uber', location: 'San Francisco' }
];

const [ { location } ] = companies2;
location;



"---"
// otro ejemplo:

const Google = {
locations: ['Montain View', 'New York', 'London']
};

const { locations: [ locatioon, locatiooon ] }  = Google;
locatioon;
locatiooon;

"----";


// Ejemplos aplicados:
// propiedades no importa el orden:
// esto puede ayudar a no preocuparse por el orden de las propiedades
function signup({city, email, dateOfBirth, password, username}){
// create new user;
return [city, email];
}

// other code
// other code
// other code
// other code
// other code
// other code

const user  = {
username: 'myname',
password: 'mypassword',
email: 'myemail@example.com',
dateOfBirth: '1/1/1990',
city: 'New York'
};

signup(user);


// Otro ejemplo:

// Tenemos el siguiente array de arrays:
const points = [
[4,5],
[10,1],
[0,4]
];


// La idea es convertir a una estructura de datos así:
// Un array de objetos.
[
{x: 4, y:5},
{x: 10, y:1},
{x: 0, y:40}
]

points.map( ([x, y]) => {

return { x, y};

});

// Otra forma: Mejor la de arriba.
points.map(point => {
return { x: point[0], y: point[1]};
});


/* Ejercicios : */
// Destructuring in Practice
/* The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line? */

/* 

const profile = {
title: 'Engineer',
department: 'Engineering'
};

function isEngineer(profile) {
var title = profile.title;
var department = profile.department;
return title === 'Engineer' && department === 'Engineering';
}

*/

const profile = {
title: 'Engineer',
department: 'Engineering'
};

function isEngineer({title, department}) {
return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);


/* Ejercicios : */
// Array Destructuring in Practice
// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

/*

const classes = [
[ 'Chemistry', '9AM', 'Mr. Darnick' ],
[ 'Physics', '10:15AM', 'Mrs. Lithun'],
[ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject;

*/

const classes = [
[ 'Chemistry', '9AM', 'Mr. Darnick' ],
[ 'Physics', '10:15AM', 'Mrs. Lithun'],
[ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];


const classesAsObject = classes.map( ([subject, time, teacher]) => {
  
  return { subject, time, teacher}
  
});

// Recursion with Destructuring
// This one is probably the hardest exercise in the entire course! 
// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  
// Do not use any array helpers!
//  Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
// Input: double([1,2,3])
// Output: [2,4,6]

/*

const numbers = [1, 2, 3];

function double() {
  
}

*/

const numbers = [1, 2, 3];

function double([ first, ...rest ]) {
  return rest.length > 0 ? [ first*2, ...double(rest)] : [ first*2 ];
}


double(numbers);













var numbers = [1,2,3];
var doubleNumbers = [];

/* Multiplicar por 2 cada valor del array */
for(var i = 0; i<numbers.length; i++) {
doubleNumbers.push(numbers[i] * 2);
}

doubleNumbers;


/* Usando map: 
por cada interación en numbers, 
el return genera un push dentro de doubled con el valor retornado

¿Por que usar map?
Para evitar la mutación de arrays, generando así un nuevo array.

*/
var doubled = numbers.map(function(number) {
  
  return number * 2;
});

doubled;


var cars = [
  { model: 'Buick', price:'CHEAP' },
  { model: 'Camaro', price:'expensive' },
]

var prices = cars.map(function(car) {
 return car.price; 
});

prices;


/* 
* Ejercicio de map 
* Plucking Values
* Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!
*/

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;


heights = images.map(car => {
   return car.height; 
});


/* 
* Ejercicio de map 
* Calculating Values with Map
* Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
*/

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;

speeds = trips.map(trip => {
   return (trip.distance/trip.time); 
});


/*
* Really Hard - Implementing 'Pluck'
* This is a hard one!
* Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
* var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
* pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
* Remember that you can access a property on an object by using square bracket notation. For example...
*/
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  
  return array.map(element => {
    
    return element[property];
    
  });
}

pluck(paints, 'color');





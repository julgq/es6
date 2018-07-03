// Usar Rest and Spread Operators cuando no sabes la cantidad de variables del mismo tipo que entraran a la función
function addNumbers(...numbers){
    return numbers.reduce((sum, number )=> {
        return sum + number;
    }, 0);
} 

addNumbers(1,2,3,4,5,6,7,8,9,10);


// Otro caso de uso:

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

['green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors];


// Otro caso de uso:

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0){
    return ['milk', ...items];
  }
  
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

// Un caso más real del uso diario:
// Imaginemos una libreria matematica en la cual necesita pasar valores para realizar diferentes tipos de calculos

"---";
const MathLibrary = {
 
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a,b) {
    return a*b;
  }
  
};

MathLibrary.calculateProduct(5,5);


// Manay, Many Arguments
// Refactor the following function to use the rest operator. Remember, an argument using the rest operator, does *not* need o be called 'rest'
/*
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/


// Refactoring

function product(...rest) {
    var numbers = [...rest];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }




//Spredin' Arrays
// Refactor the following the spread operator
/*
function join(array1, array2) {
  return array1.concat(array2);
}
*/

// Refactoring
function join(...array) {
  return array[0].concat(array[1]);
}


join('hola','julio');


// Mixing Rest and Spread
// Refactor the following to use the only the rest operator:

/*
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...rest) {
  return [...rest].concat(array);
}

unshift(['julio','cesar'], 1,2,4,5,'a');

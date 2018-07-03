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


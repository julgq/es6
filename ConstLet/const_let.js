/* const let var */

/*
* const: es usada para declarar una variable que no va cambiar en el tiempo
* let: es usada para cuando una variable si cambia en el tiempo
* Usarlas permíte hace código más legible
*/

//var name = 'Jane';
//var title = 'Software Engineer';
//var houryWage = 40;

// ES6:

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;


/* Ejemplo de un refactoring de una función de código tradicional */

function count(targetString) {
  var characters = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;
  
  for(var i=0; i < targetString.length; i++){
    if ( characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}


count('aeiobzxeiaipbiox');

"....."

const counter =  targetString => {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;
  
  targetString.split("").forEach(char => {
    if(characters.includes(char)){ number++ };
  });
  
  return number;
  
}

counter('aeiobzxeiaipbiol');
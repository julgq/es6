var numbers = [10, 20, 30];

var sum = 0;

for ( var i = 0; i<numbers.length; i++) {
  sum += numbers[i];
}

"---";

/*
 - Iteración de cada elemento
 - En la funcion, va la variable que toma el resultado primero
 - La segunda es el iterador
 - Y el operador de la función indica que se hará
 - En este caso es suma
 - sum obtiene el resultado final y number va sumando cada elemento iterado
 - La función puede llevar un un ultimo numero y se ejecuta dependiendo del operador que es.
 - Es un valor inicial el que esta al final de la función.
 
*/

numbers.reduce(function(sum, number){
  return sum + number;
  
}, 1 );

"---";

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];


"---";

// ¿Cómo obtener los colores de un array y crear otro solo con sus valores? */
primaryColors.reduce(function(previous, primaryColor) {
  
  previous.push(primaryColor.color);
  
  return previous;
  
},[]);

"------";

// Casos practicos para usar reduce
// El problema del parentsis
// Tendría que regresar 0 o True si existe equilibrio.
// Este test generalmente se usa mucho en entrevistas de trabajo para Developers.


// ((((()))))
//  )(
// ())))
"------";"------";

function balanaceParens(string) {
  return string.split("").reduce(function(previous, char){
    if(previous < 0) { return previous }
    if(char === "(") { return ++previous; }
    if(char === ")") { return --previous; }
    return previous;
  }, 0);
  
}

balanaceParens("()");


"------";"------";
// Distance Traveled
// Use the 'reduce' helper to find the sum of all the distances traveled. &nbsp;Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(acomulador, trip){
    
    return acomulador + trip.distance;
    
},0);



"------";"------";

// Reducing Properties
// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acomulator, desk) {
  

  
  if ( desk.type === 'sitting' ) {  
     
      acomulator.sitting++;
      
  }
  
 
  if ( desk.type === 'standing' ) { 
     
      acomulator.standing++;
      
  }
  
  return acomulator;
  
}, { sitting: 0, standing: 0 });


"------";"------f";

/*
* Hardmode: Custom 'Unique' Helper
* Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
*/

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
 
 return array.reduce(function(acomulator, item){
 
  if(array.filter(element =>{return element === item}).length>1){
  	
    acomulator.splice(item,1);
  }
  
   return acomulator;
   
 },array); 
 
}

unique(numbers);


   







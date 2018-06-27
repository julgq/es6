/*
* Arrow Functions with ES6>
* Una de las características más importantes de ES&
*/

// Método tradicional

const add = function(a,b) {
    return a+b;
  }
  
  add(1,2);
  
  
  // Refactor : Arrow function - Opción 1:
  const add2 = (a, b) => {
    return a+b;
  }
  
  // Refactor : Arrow function - Opción 2:
  const add3 = (a,b) => a+b; // Se puede usar cuando el contenido es solo una expressión en el return
  
  /*
  * Advance use Arrow Functions
  */
  
  const double = function(number) {
  return 2* number;
  }
  
  // Refactor:
  const double2 = number => 2*number;
  
  
  const doubleP = function() {
  return 2* 1;
  }
  
  // Refactor:
  const doubleP2 = () => 2*1;
  
  
  "-------";
  
  const numbers = [1, 2, 3];
  
  // Opción 1:
  numbers.map(number => {return 2*number;});
  
  // Opción 2:
  numbers.map(number => 2*number);
  
  
  "------";
  
  const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
      return this.members.map(function(member) {
        return `${member} is on team ${this.teamName}`;
      }.bind(this));
    }
  };
  
  team.teamSummary();
                       
  
  // Refactor
  // Arrow functions solucionan el problema del uso de this y bind
  const team2 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary:  function(){
      return this.members.map(member => {
        return `${member} is on team ${this.teamName}`
      });
    }   
  };
  
  team2.teamSummary()
  
  /*
  * Refactoring Keyword Functions
  */
  const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  
  // Refactor 1
  const fibonacci2 = (n) => { if (n < 3){return 1} else { return fibonacci(n - 1) + fibonacci(n - 2)} }
  
  
              
  const profile = {
      name: 'Alex',
      getName: function () {
          return `${this.name}`
      }
  };
  
  profile.getName()

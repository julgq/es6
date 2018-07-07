/* Modelo Tradicional Viejo para Crear Clases */
// Function Car
function Car(options){
    this.title = options.title;
  }
  
  // Prototype de Car
  Car.prototype.drive = function() {
    return 'vroom';
  }
  
  
  
  function Toyota(options){
    Car.call(this, options);
    this.color = options.color;
  }
  
  // Crea el objeto Car dentro de la clase Toyota.
  Toyota.prototype = Object.create(Car.prototype);
  Toyota.prototype.constructor = Toyota;
  
  Toyota.prototype.honk = function(){
    return 'beep';
  }
  
  
  
  const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
  '----';
  
  toyota;
  toyota.drive();
  toyota.honk();
  "-----";
  /* FIN Modelo Tradicional Viejo para Crear Clases */                      
  
  /* Crear Clases y Objetos con ES6 */
  
  class Car2 {
    constructor({ title }) {
      this.title = title;
    }
    
    drive() {
      return 'vroom';
    }
  }
  
  
  class Toyota2 extends Car2  {
    constructor(options) {
      super(options); // Car2.constructor()
      this.color = options.color;
    }
    
    honk() {
      return 'beep';
    }
  }
  
  const toyota2 = new Toyota2({color: 'red', title: 'Daily Driver'});
  '---';
  
  toyota.honk();
  toyota.drive();
  toyota;
  
  
  /* ¿Cuando utilizar Clases */
  // Utilizando en ReactJS
  
  
  
  /* Game Classes */
  cons
  /* 
  You are a game developer tasked with setting up some basic classes for a new game you are working on. &nbsp;Create a class called 'Monster'. &nbsp;In the constructor, you'll need to do some basic setup for Monster whenever they are created.&nbsp;
  */
  
  
  /* 
   - Initialize the Monster's health to 100.
   - The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
  */
  
  class Monster {
    constructor(options){
        this.name = options.name;
        this.health = 100;
    }
  }
  const uglymonster = new Monster({name: 'Beto'});
  
  
  
  
  /*
  Subclassing Monsters
  Now that you have a monster created, create a subclass of the Monster called Snake.  
  The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
  The instance of Snake that is passed in should have their health deducated by 10
  */
  
  class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster {
      constructor(options){
          super(options)
      }
      bite(other){
          other.health -= 10
      }
  }
  
  
  
  
  
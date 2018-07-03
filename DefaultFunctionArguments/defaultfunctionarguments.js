/* Using Default Arguments */

function makeAjaxRequest(url, method = 'GET') {
    return method;
  }
  
  makeAjaxRequest('google.com');
  makeAjaxRequest('google.com', 'POST');
  
  // Crear un usuario
  function User(id) {
    this.id = id;
  }
  
  // Crear un Id, un numero aleatorio 
  function generatedId(){
    return Math.random() * 999999999;
  }
  
  
  // Crear un usuario con status de admin = true
  function createAdminUser(user = new User(generatedId())) {
    user.admin = true;
    return user;
  }
  
  
  // Usar la función usuario y aqui mismo generar un id
  const user = new User(generatedId());
  createAdminUser(user);
  
  
  // Using Default Arguments
  
  function sum(a=1,b=1) {
    if (a === undefined) {
      a = 0; 
    }
    
    if (b === undefined) {
      b = 0; 
    }
    
    return a + b;
  }
  
  
  sum(2,2);
  
  function Style(style){
   
     if (!style) {
      style = {}; 
    }
    
  }
  
   function addOffset(style) {
    
    if (!style) {
      style = {}; 
    }
    
    style.offset = '10px';
    
    return style;
    
  }
  
  addOffset();
/* Array Helper: every and some */
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 },
  ];
  
  
  /* every use case: */
  /* tradional way: */
  
  // ¿Todas las computadoras tienen ram menor a 16 en ram ? */
  var allComputersCanRunProgram = true;
  var onlySomeComputersCanRunProgram = false;
  
  for(var i = 0; i<computers.length; i++){
    var computer = computers[i];
    
    if ( computer.ram < 16){
      allComputersCanRunProgram = false;
    } else {
      onlySomeComputersCanRunProgram = true;
    }
    
  }
  
  "----";
  
  allComputersCanRunProgram;
  onlySomeComputersCanRunProgram;
  
  "----";
  // ¿Todas las computadoras son mayores a 16 GB 
  computers.every(computer => {
    return computer.ram > 16;
  });
  
  "----";
  // Por lo menos un elemento cumple la condición?
  computers.some(computer => {
    return computer.ram > 16;
  });
  
  "----";
  
  var names = [
    "Alexandria",
    "Matthew",
    "Joe"
  ];
  
  /* Todos los nombres son mayores a 4 caracteres */
  "----";"----";
  names.every(name => {
    return name.length > 4;
  });
  
  names.some(name => {
    return name.length >4;
  });
  
  /* Caso frecuente de uso, login, sign  form */
  /* Validar el total de campos de un formulario */
  "----";
  function Field(value) {
    this.value =  value;
  }
  
  Field.prototype.validate = function() {
    return this.value.length > 0;
  }
  
  var username = new Field("2cool");
  var password = new Field("my_password");
  var birthdate = new Field("10/10/10");
  
  username.validate() && password.validate();
  
  
  // ¿Todos los campos su valor son mayor a 0 caracteres?
  var fields = [username, password, birthdate];
  
  var formIsValid = fields.every(field =>{
    return field.validate();
  });
  
  if(formIsValid) {
    // allow user to submit!
  } else {
    // show an error message
  }
  
  
  "----";
  // Finding Submitted Users
  // Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
  
  
  var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted;
  
  hasSubmitted = users.every(user => {
     return user.hasSubmitted === true; 
  });
  
  
  "----";
  
  // In Progress Network Requests
  // Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
  
  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress;
  
  inProgress = requests.some(request => {
      
      return request.status == 'pending';
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
/* Template Strings */

/* Modelo tradicional de usar cadenas: */
function getMessage() {
    const year = new Date().getFullYear();
    return "The Year is " + year;
  }
  
  /* Refactoring Tempate Strings: */
  
  function getMessageR() {
    const year = new Date().getFullYear();
    
    // Cualquier valor puede estar insertado aquí:
    return `The year is ${ year +1 }`;
  }
  
  getMessageR();
  
  "----";
  
  const device_id = 4;
  const guid = 20;
  const username = "hello";
  
  const data = `{"device_id": "${device_id}", "guid":"${guid}", "username":"${username}"}`;
  data;
  
  
  const year = 2016;
  const yearMessage = `The year is ${year}`;
  
  yearMessage
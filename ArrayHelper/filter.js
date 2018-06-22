var products = [
    { name: 'cucumber', type: 'vegetable', quantity:0, price: 1},
     { name: 'banana', type: 'fruit',  quantity:10, price: 15},
     { name: 'celery', type: 'vegetable',  quantity:30, price: 13},
     { name: 'orange', type: 'fruit',  quantity:3, price: 5}
   ];
  
  
  
  // Forma tradicional para generar un subset "subconjunto"
  // No es recomendable usar for para todo en iteración de datos
  var filterProducts = [];
  
  for ( var i = 0; i <products.length; i++){
      if (products[i].type === 'fruit') {
    filterProducts.push(products[i]);
    }
  }
  
  filterProducts;
  
  // usar 'filter' array helper.
  // crear un subconjunto pero filtrado en base a una validación
  // ayuda bastante en una aplicación del lado del cliente para filtrar datos
  
  products.filter(product => {
    
    return product.type === 'vegetable';
    
  });
  
  
  // Other example:
  
  products.filter(product => {
    return product.type === 'vegetable' 
      && product.quantity > 0 
      && product.price < 10;
  });
  
  
  // Otra situación:
  // Mostrar todos los comentarios que estan asociados con un post especifico.
  
  var post = { id: 4, title: 'New Post' };
  
  var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
   ];
  
  
  function commentsForPost(post, comments) {
    return comments.filter(comment => {
      return comment.postId === post.id
    });
  }
  
  commentsForPost(post, comments);
  
  // Ejercicios:
  
  /* Filtering Values
  *  Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
  */
  
  var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  
  var filteredNumbers;
  
  filteredNumbers = numbers.filter(number => {
     return  number > 50;
  });
  
  /*
  * Handling Permissions with Filter
  * Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
  */
  
  var users = [
   { id: 1, admin: true },  
   { id: 2, admin: false },
   { id: 3, admin: false },
   { id: 4, admin: false },
   { id: 5, admin: true },
  ];
  
  var filteredUsers;
  
  filteredUsers = users.filter(user => {
      
      return user.admin === true;
  });
  
  
  
  
  /*
  * Challenging!  Implementing 'reject'.
  * This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
  * var numbers = [10, 20, 30];<br>var lessThanFifteen = reject(numbers, function(number){<br>&nbsp; return number &gt; 15;<br>});&nbsp;<br>lessThanFifteen // [ 10 ];
  */
  
  var numbers=[10,20,30];
  
  function reject(array, iteratorFunction) {
    
      return array.filter(number =>{
          return iteratorFunction(number)===false
          
      });
  };
  
  var lessThanfifteen=reject(numbers,function(number){
    return number > 15;
  })
  lessThanfifteen;
  
  
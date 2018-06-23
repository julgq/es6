/* Find Helper */

var users = [
    { name: 'Jill'}, 
    { name: 'Alex'},  
    { name: 'Bill'}
  ];
  
  var user;
  
  for (var i =0; i < users.length; i++){
      if ( users[i].name === 'Alex') {
      user = users[i];
      break;
    }
  }
  
  
  
  /* Solo regresa el primer elemento que coincide con la busqueda */
  /* Si existen dos iguales: {name: 'Alex' },  solo regresa el primero */
  
  users.find(user => {
    
    return user.name === 'Alex';
    
  });
  
  
  // Example Find Helper:
  
  function Car(model) {
    this.model = model;
  }
  
  var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
  ];
  
  cars.find(function(car) {
    return car.model === 'Focus';
  });
  
  
  // Example Find Helper Find
  
  var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
  ];
  
  var comment = { postId: 1, content: 'Great Post' };
  
  function postForComment(post, comment) {
    return posts.find(function(post) {
      return post.id === comment.postId;
    });
  }
  
  postForComment(posts, comment);
  
  
  
  
  
  /*
  * Finding Admin Users
  * Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
  */
  
  var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin;
  
  admin = users.find(user => {
     return user.admin == true; 
  });
  
  /*
  * What's Your Balance?
  * Find the account with a balance of 12 and assign it to the variable 'account'.
  */
  
  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account;
  
  account = accounts.find(account => {
     return  account.balance === 12;
  });
  
  
  
  
  /*
  * Really Challenging: Custom findWhere Helper
  * This is a tough one! &nbsp;The most common find operation is to an object that has a given property. &nbsp;Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
  * findWhere(ladders, { height: '20 feet' });
  * { ladders: '20 feet' }
  *  should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
  * In summary:
  * var ladders = [  { id: 1, height: 20 },  { id: 3, height: 25 }];
  * findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
  * Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use 
  * Object.keys(criteria)[0]
  *  to figure out the name of the property on the object.  For example, 
  * Object.keys({ height: '20 feet' })
  * would return 
  * You could then check to see if a given element in the array had a property equal to the criteria's value with something like 
  * element[property] === criteria[property]
  */
  
  var ladders = [
      {id: 1, height: 20},
      {id: 1, height: 25}
  ];
  
  var result;
  
  function findWhere(array, criteria) {
      
      //get the key:
      const key = Object.keys(criteria);
      
      return array.find(item => {
         
         return item[key] == criteria[key]
      });
    
  }
  
  findWhere(ladders, { height: 25 });
  
  
  
  
  
  
  
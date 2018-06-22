/*
* ES6 Example 'Array Helper: forEach'
*/

// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
sum += number;
}

// Loop over the array, incremeting the sum variable
numbers.forEach(adder);

// Other way to make: using function into the forEach
// Function anonymous
numbers.forEach(function(number) {
	sum += number;
});

// Other way using arrow functions
// Function anonymous
numbers.forEach(number => {
	sum += number;
});

// print the sum variable
sum;


/* 
* Real World Example 
* Moving Away from For Loops
* The code below is calling 'savePost' three times, but it is doing so using a for loop. &nbsp;This implementation works, but the for loop makes it more challenging to understand&nbsp;the purpose of the function. &nbsp;Rather than using a for loop, refactor the code below to instead&nbsp;use the forEach helper.
*/

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

// Refactor using arrow function:
function handlePosts() {
     var posts = 
        [
            { id: 23, title: 'Daily JS News' },
            { id: 52, title: 'Code Refactor City' },
            { id: 105, title: 'The Brightest Ruby' }
        ];
        
        posts.forEach(post => {
           savePost(post); 
        });
  
  			/* without arrow function: */
  			 posts.forEach(function(post) {
           savePost(post); 
        });
}


/* 
* Real World Example 
* Processing Values
* The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.
*/
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(image => {
   areas.push(image.height*image.width);
});

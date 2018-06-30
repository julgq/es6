/* Enhanced Object Literals */

/* Modelo tradicional */
function createBookShop(inventory) {
	return {
    inventory: inventory,
    invetoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price; 
      /* Con poner .price se indica que solo queremos que salga ese valor */
    }
  };
}


const inventory = [
  { title: 'Harry Pottter', price: 10},
  { title: 'Eloquent JavaScript', price: 15}
];

const bookShop = createBookShop(inventory);

bookShop.invetoryValue();
bookShop.priceForTitle('Harry Pottter');


/* Usar ES6 */
/* 
	- Cuando usamos un parametro y valor con el mismo nombre, puede solo poner el parametro y funciona igual.
  - Los parametros que son asignados otra función, es posible quitarle el function y y los parentesis ponerlos a lado derecho del parametro 
*/
function createBookShop(inventory) {
	return {
    inventory, 
    invetoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price; 
      /* Con poner .price se indica que solo queremos que salga ese valor */
    }
  };
}



"----"

/* Modalo tradicional: */
function saveFile(){
  $.ajax({ method: 'POST', url: url, data: data});
}

const url = "http://fileupload.com";
const data = { color: 'red' };

save(url, data);

/* ES6: Refactoring*/
function saveFile(url, data){
  $.ajax({ 
    url, 
    data, 
    method: 'POST'
  });
}



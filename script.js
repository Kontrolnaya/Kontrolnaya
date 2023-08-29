let discount = prompt('Братан какая скидка?')
let potom = confirm('Ок')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]
// // *// 1. Сохранить самый дорогой товар в переменную`max`*
// // *// 2. Сохранить самый дешевый товар в переменную`min`*
// // *// 3. Сохранить общую цену без скидок в переменную`total`*
// // *// 4. Сохранить общую цену со скидкой в переменную`totalSale`*
// // *// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*
// // *// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
// // *// * Писать весь код в функции `setup()`*
let arr_sale = []

const setup = () => {
  max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
  if (arr[i].price > max.price) {
  max = arr[i]; 
  }
  }
  
  console.log('самый дорогой товар:', max);
  

  min = arr[0]; 
  
  for (let i = 1; i < arr.length; i++) {
  if (arr[i].price < min.price) {
  min = arr[i]; 
  }
  }
  
  console.log('самый дешевый товар:', min);
  

  for (let i = 0; i < arr.length; i++) {
  total += arr[i].price;
  }
  
  console.log('обшая цена без скидки:', total);
  

  let discountAmount = (total * discount) / 100;
  totalSale = total - discountAmount;
  
  console.log('обшая цена со скидкой:', totalSale);
  

  let arr_sale = [];
  
  for (let i = 0; i < arr.length; i++) {
  let discountedPrice = arr[i].price - (arr[i].price * discount) / 100;
  arr_sale.push({ name: arr[i].name, price: discountedPrice });
  }
  
  console.log('масив с обновленной ценой:', arr_sale);
  

  average = total / arr.length;
  
  console.log('cредня цена всех продуктов без скидок:', average);
}

setup(

)

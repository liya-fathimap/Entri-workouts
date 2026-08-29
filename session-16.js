//Loops, Arrays & Objects

//for Loop 
for(i=0;i<=10;i++){
    console.log(i);
}

//while loop

let stock =10;
while(stock>0){
    console.log("in stock");
    stock--;
}

//do while

let attempts=0;
do{
    console.log("attempted");
    attempts++;
}while(attempts<3)

// continue and break

for(i=0;i<10;i++){
    if (i%2!=0)continue;
    if (i==8) break;
    console.log(i);
}

//Creating & Accessing Arrays

const cart =["phone","watch","cloth","tv"];
console.log(cart[0]);
console.log(cart.length);

//creating array of objects

const objectarray=[
{id:1,Name:"phone"},
{id:2,Name:"watch"},
];

console.log(objectarray);

//push, pop, unshift, shift

// push — add to the END
cart.push("Watch"); // ["Phone","Laptop","Watch"]
// pop — remove from the END, returns removed item
const removed = cart.pop(); // "Watch"
// unshift — add to the BEGINNING
cart.unshift("Headphones"); // ["Headphones","Phone","Laptop"]
// shift — remove from the BEGINNING, returns removed item
const first = cart.shift(); // "Headphones"

//splice vs slice

// splice(start, deleteCount, ...add)
// mutates the original
cart.splice(1, 0, "Keyboard");
// insert at 1, delete 0
cart.splice(0, 1);
// remove 1 item at index 0
// slice(start, end) — end NOT included
// returns a NEW array, no mutation
const copy = cart.slice(0, 2);
// cart itself is unchanged

//map 

const price=[100,200,300]

const discounted=price.map(price=>price*0.9);
console.log(discounted);
console.log(price);

const products = [
{ name: "Phone", price: 9999 ,stock:true},
{ name: "Laptop", price: 49999,stock:false},
];
console.log(products.map(product=>product.name));
console.log(products.filter(product => product.stock))

const prices = [9999, 49999, 4999];
const total = prices.reduce(
(sum, price) => sum + price, 0
);
console.log(total); 

//for...of — Clean Loop Over Arrays

const arr1=["lap","phone","tv"]
for (const product of arr1) {
console.log(product);
}

//object

const user = {
name: "Priya",
email: "priya@email.com",
age: 25
};

//Creating & Accessing Properties

const product = {
id: 1,
name: "Wireless Headphones",
price: 2499,
inStock: true,
tags: ["electronics", "audio"], // array as a value
specs: { battery: "20hr", color: "black" } // nested object
};
// Dot notation — most common
product.name; // "Wireless Headphones"
product.specs.color; // "black"
// Bracket notation — for dynamic or space-containing keys
const key = "price";
product[key]; 
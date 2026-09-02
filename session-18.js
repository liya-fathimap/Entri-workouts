//Function Deep Dive

//Function Statement vs. Expression
//function statement
function greet(name){
   return `Hello ${name}`;
}
console.log(greet('alice'));
//function expression
const greet2=(name)=>{
    return `hello ${name}`;
}
console.log(greet2('bob'));

//Callback Function?
/*A function passed as an argument to another function,
 to be called later — immediately, or after some event or operation */

 //example1:greeting name 

 function greeting(name,callback){
  const message=`hello ${name}`;

  callback(message);
 }
 function displaymessage(message){
     return console.log(message);
 }

 greeting('alice',displaymessage);

 //setTimeout — A Callback After a Delay

 console.log('before settimeout');
 setTimeout(()=>{
    console.log('inside settimeout'),2000
 });

 console.log('after settimeout');

 //Higher-Order Functions (HOFs)

 function applytwice(func,value){
      return func(func(value));
 }

 const double = n => n * 2;
 console.log(applytwice(double,3));

 //Default Parameters

 function greetingg(name="guest"){
    return `Hello, ${name}!`;
 }

 console.log(greetingg());
 console.log(greetingg('john'));

 //Default Parameters — Advanced Patterns

 function area(length,width=length){
    return length*width;
 }
 console.log(area(4));
 console.log(area(4,5));

 //Array Destructuring

const [first,second]=[1,2,3,4,5];
console.log(first);
console.log(second);

const [a=1,b=2,c=3]=[10,20];
console.log(a);
console.log(b);
console.log(c);

//object destructing
const user = {
name: "Alice", age: 25,
address: { city: "Mumbai", zip: "400001" },
}
const {name,age}=user;
const{role="guest"}=user;
console.log(name);
console.log(age);
console.log(role);
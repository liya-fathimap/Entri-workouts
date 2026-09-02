//Shallow & Deep Copying

const original={
    name:'john',
    age:45,
    score:67
}

const copy=original;
copy.age=32;
console.log(original);
console.log(copy);

//problem:Objects and arrays are stored by reference .so changes happens in both 

//spreading arrays

const arr1=[1,2,3];
const copyarr1=[...arr1];
copyarr1.push(4);
console.log(arr1);
console.log(copyarr1);

const merged=[0,...arr1,8];
console.log(merged);

//sort without mutating the original

const price=[100,300,200,400];
const pricesorted=[...price].sort((a,b)=>a-b);
console.log(price);
console.log(pricesorted);

//Spreading Objects

const user={
    name:'arun',
    age:5
};

const copyuser={...user}
copyuser.age=9;
console.log(user);
console.log(copyuser)

//Spread in Function Calls

const numbers=[1,2,5,8,9];
const max=Math.max(...numbers)
const min=Math.min(...numbers)
console.log(max)
console.log(min)

//Spread vs. Rest
/*OLLECTS values inward
Used in function DEFINITIONS (parameters). Gathers individual items into
an array.
How to Tell Them Apart
If ... is in a function PARAMETER list, it's rest. Everywhere else — function calls, array literals, object literals — it's spread
*/

function sum(...number){
    return number.reduce((total, n) => total + n, 0);
}

const result=sum(1,2,3);
console.log(result)

//Rest in Destructuring

const [first, second, ...remaining]= [10, 20, 30, 40, 50];
console.log(first)

const { name, age, ...otherDetails } = {
name: "Alice", age: 25, city: "Mumbai"
};
console.log(otherDetails);

//Spread Only Copies the Top Level

const user1={
    name:'alice',
    address:{city:'mumbai',pincode:4010},
    age:34
}

const user1copy={...user1};
user1copy.name='john doe';
console.log(user1);
console.log(user1copy)

user1copy.address.city='calicut';
console.log(user1);
console.log(user1copy);

//Shallow Copy vs. Deep Copy
/*Shallow Copy
Only the TOP LEVEL is copied. Nested objects and arrays are still
references to the same data in memory.
Deep Copy
EVERYTHING is copied — including all nested levels. No shared
references remain.

Spread (...) and Object.assign() are both SHALLOW. They work fine for flat objects.
For nested structures, you need a deep copy method — like structuredClone()
*/

//structuredClone()
const user2={
     name:'sam',
     address:{city:'jodpur',pincode:4590}
}

const user2copy=structuredClone(user2);
user2copy.address.city='luxberg';
console.log(user2)
console.log(user2copy)

//keys(), values(), entries()

const product={
    name:'watch',
    price:34000,
    model:'smart'
}

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))

/*Object.fromEntries()
The reverse of Object.entries() — converts [key, value] pairs back into an object. */

const entries=[['name','phone'],['price',9000]];
console.log(Object.fromEntries(entries));

//Object.freeze() — Immutability

const config = Object.freeze({
apiUrl: "https://api.shopeasy.com",
maxRetries: 3,
});
// These all fail silently (or throw in strict mode)
config.apiUrl = "https://hack.com"; // ignored
config.newProp = "test"; // ignored
delete config.maxRetries; // ignored
console.log(config.apiUrl)


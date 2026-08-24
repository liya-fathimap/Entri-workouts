// function  greeting with name

function greet(name) {
return `Hello, ${name}!`;
}
console.log(greet("liya"))

//Write a function declaration calculateArea(width, height) that returns width * height. Call it with 3 pairs of numbers

function calculateArea(height,width){
return(console.log(height*width))
}

calculateArea(5,3)

//Convert calculateArea to a function expression stored in const. Confirm it works the same way

const area=function calculateArea(height,width){
       return height*width
}
console.log(area(5,3))

//Convert it again to an arrow function — the shortest possible syntax (single expression, no braces, no return)

const area_using_arrow = (height,width) => height*width

console.log(area_using_arrow (5,3))

//Write an arrow function getDiscount(price, percent) that returns the discounted price. getDiscount(1000, 10) should return 900.

const getDiscount = (price, percent)=>{
   return price-(price*(percent/100))
}

console.log( getDiscount(1000,10) )

//Write a function with NO return statement and log the result of calling it. Confirm it logs undefined.

function test() {
}

console.log(test()); 

//Write calculator(a, b, operation) that takes two numbers and 'add'/'subtract'/'multiply'/'divide', using a switch inside. Test all four.

function calculator(a,b,operation){
    switch(operation){
        case '+':
            console.log(a+b)
            break;
        case '-':
            console.log(a-b)
            break;
        case '*':
            console.log(a*b)
            break;
        case '/':
            console.log(a/b)
            break; 
        default:
            console.log("enter valid operator")               

    }
}

calculator(2,3,'+')
calculator(6,3,'-')
calculator(2,3,'*')
calculator(6,3,'/')

//Write an arrow function celsiusToFahrenheit(c) = (c * 9/5) + 32. Test with 0, 100, and 37.

const celsiusToFahrenheit=c=>{return (c * 9/5) + 32}
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(celsiusToFahrenheit(37))

//Write three versions of a function that uppercases a string: declaration, expression, and arrow function. Confirm all three match.

function uppercase(string){
    return string.toUpperCase()
}
console.log(uppercase('liya'))
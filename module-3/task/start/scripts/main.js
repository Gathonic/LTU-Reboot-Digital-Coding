// This is a single line comment

/*
this is
a  
multiple line comment
*/


const productName ="baked beans"; // string
let price = 0.89; // number - float
let quantity = 2; //number Integer
let inStock = true; //Boolean
let discountAmount = 0.20; //number - float

//console.log(productName, price);


function showProductName() {
    console.log(productName);
}

//showProductName();

function totalPrice(productPrice, productQuantity) {
console.log (productPrice*productQuantity);
}

//totalPrice(price, quantity);

//function checkAvailability= (productInstock) {
    //console.log(productInstock);
//}

let checkAvailabilty = productInStock  => console.log(productInStock);


//checkAvailabilty(inStock);

function productDiscount() {
    if (quantity > 1) {
       let newPrice = (price - discountAmount * quantity);
        console.log(newPrice);
    } else {
        console.log(price * quantity);
    } 
}

//productDiscount();

/*
check drink
 coke
 lemonade
 orangeade
 default- what if none of those drinks are selected
 what if the drink is in capitals?
 lowercase() = lowercase
*/



function drinkOrder (drink, size) {
    let drinkLow = drink.toLowerCase();

    switch (drinkLow) {
        case 'coke':
            console.log(drink, size); // coke
            break;

        case 'lemonade' :
            console.log(drinkLow, size); // lemonade
            break;

        case 'orangeade' :
            console.log(drinkLow, size); // orangeade
            break;

        default:
            console.log(drinkLow, 'is not available');
            break;
    }
}

//drinkOrder('Lemonade', 'extra large');

/*
operator
+ - / *
*/

/*

function calculator(num1, num2, operator){

    switch (operator) {
        case '+':
            //console.log(num1 + num2); // addition
            //console.log(num1 + '+' + num2 + '=' + (num1+num2) );
            console.log(`${num1} ${operator} ${num2} = ${num1 + num2}` );
            break;

        case '-':
            console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`); // subtraction
                break;
        
        case '/':
            console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`); //division
                break;
        
        case '*':
            console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);  // multiplication
                break;
        
        case '%':
            console.log(`${num1} ${operator} ${num2} = ${num1 % num2}`);  // modulus
                break;
    
        default:
            console.log(`${operator} doesnt exist`);
            break;
    } // end of switch statement 

} // end of calculator function

calculator(5, 5, '+');
calculator(5, 5, '-');
calculator(5, 5, '/');
calculator(5, 5, '*');
calculator(5, 3, '%');
calculator(5, 3, '?');
*/

// this is an array - below
let productAsAnArray = [productName, price, quantity, inStock, discountAmount];

//console.log(productAsAnArray); (how to call an object)

let firstItem = productAsAnArray[0]; // the array name followed by [] and then the index number inside the square brackets - arrayName[0]
let lastItem = productAsAnArray[4];

// how to access a specific array
//console.log(firstItem); 
//console.log(lastItem);


// this is an object - below
let productAsAnObject ={
    productName : 'Baked beans',
    price: 0.89,
    quantity: 2,
    inStock: true,
    discountAmount: 0.20
};


//console.log(productAsAnObject.productName); -how to call object
//console.log(productAsAnObject.quantity);

//accessing parts of an array
//let productName2 = productAsAnObject.productName;
//console.log(`Product name: ${productName2}`);
//console.log(productAsAnObject.price);

productAsAnObject.price = 1.25;
//console.log(productAsAnObject.price);
//productAsAnObject.inStock = false;

//productAsAnObject.loyaltyCard = false; //adding new property

//console.log(productAsAnObject.loyaltyCard)

//delete productAsAnObject.loyaltyCard; //deleting property 

//console.log(productAsAnObject.loyaltyCard)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//console.log(numbers.length); // lets you run through all numbers
// for loop
//for(let counter = 0; counter < 9; counter++){
 ////console.log(numbers[counter]);   // accessing the array
//}

//for(let counter = 0; counter < numbers.length; counter++){
 //console.log(numbers[counter]);   // numbers.length means you dont have to go in and keep changing
//}

/*
7 times table
7*1
7*2 etc
for loop 
something added to it
counter = 1
condition: counter<=12
counter++
*/

//for(let counter = 1; counter <= 12; counter++) {
  //  let result = 7 * counter;
    //console.log(result);
    //console.log(`7 * ${counter} = ${result}`);
//}

//by creating a function we have made it easier to do further calculations
function multipleBy(num) {
    for(let counter = 1; counter <= 12; counter++) {
        let result = num * counter;
        console.log(`${num} * ${counter} = ${result}`);
    } 
}

multipleBy(10);
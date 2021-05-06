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
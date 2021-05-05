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

productDiscount();

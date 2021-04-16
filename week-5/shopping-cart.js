  
/** 
   Title: shopping-cart.js
   Author: Alex Haefner
   Date: 4-16-2021
   Description: Class 
*/

class ShoppingCart {

    constructor() {
        
        let products = [];
    }


    count() {
        //Returning length of products array
        return products.length;
    }

    add(product) {

        //Adding product object to products array
        products.push(product);

    }




}
  /** 
   Title: shopping-cart.js
   Author: Alex Haefner
   Date: 4-16-2021
   Description: Class 
*/

export class ShoppingCart {

    constructor(products) {
        
        this.products = [];
    }


    count() {
        //Returning length of products array
        return this.products.length;
    }

    addProduct(product) {

        //Adding product object to products array
        this.products.push(product);

    }

    //Using JavaScript Iterators, create an iterator and in the body use a for…of 
    //statement to loop over the products array. Yield return each iterated product object
    *[Symbol.iterator]() {

        for (let i of this.products) {
            
            yield i;
        }

    }

}
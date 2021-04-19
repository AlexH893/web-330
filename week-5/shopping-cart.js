  /** 
   Title: shopping-cart.js
   Author: Alex Haefner
   Date: 4-16-2021
   Description: Class 
*/

export class ShoppingCart {

    constructor(productsArr) {
        
        this.productsArr = [];
    }


    count() {
        //Returning length of products array
        return this.productsArr.length;
    }

    addProduct(product) {

        //Adding product object to products array
        productsArr.push(product);

    }

    //Using JavaScript Iterators, create an iterator and in the body use a for…of 
    //statement to loop over the products array. Yield return each iterated product object
    * myIterator() {

        for (let i of productsArr) {
            
            yield i;
            //yield *products
        }

        for (const value of myIterator()) {
            console.log(value);
        }

    }




}
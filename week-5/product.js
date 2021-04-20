/** 
   Title: product.js
   Author: Alex Haefner
   Date: 4-16-2021
   Description: Class 
*/

export class Product {

    constructor(name, price){

        this.name = name;

        this.price = price;

        //Add a new property for id

        this.id = Math.random().toString(16).slice(2); 
    }

}
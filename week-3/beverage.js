/** 
   Title: beverage.js
   Author: Alex Haefner
   Date: 3-30-2021
   Description: Module beverage.js
*/
    import { Product } from "./product.js";

    //Inheriting the base classes properties by referencing the keyword extends.
    export class Beverage extends Product {

        constructor (name, price) {

            super(name, price);

        }



    }
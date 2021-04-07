/** 
   Title: dessert.js
   Author: Alex Haefner
   Date: 3-30-2021
   Description: Module dessert.js
*/
        //Import statement for the product object.
        import { Product } from "./product.js";
                      
        export class Dessert extends Product {

            constructor(name, price) {

            super(name, price);

            }
        }
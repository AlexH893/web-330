/** 
   Title: appetizer.js
   Author: Alex Haefner
   Date: 3-30-2021
   Description: Module appetizer.js
*/
        //Import statement for the product object.
        import { Product } from "./product.js";

        export class Appetizer extends Product{

            constructor(name, price) {
            
                super(name, price);

            }

        }
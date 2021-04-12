/** 
   Title: calorie-converter.js
   Author: Alex Haefner
   Date: 4-8-2021
   Description: Populating static variable with 6 FoodModel objects.

*/
    import { FoodModel } from "./food-model.js";

    export class CalorieConverter {

        //Populating static variable.
        static data = [ new FoodModel(1007, "Egg", 78),
            new FoodModel(1008, "Apple", 95),
            new FoodModel(1009, "Hamburger", 354),
            new FoodModel(1010, "Fries", 400),
            new FoodModel(1011, "Banana", 105),
            new FoodModel(1012, "Soda", 150),

    
    ]


      
        static find(string) {

            return this.data.filter(toLowerCase().includes(string.toLowerCase()));
        }











    }
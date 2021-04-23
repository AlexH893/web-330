/** 
   Title: float-field.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Creating class FloatField with constructors, function
   Sources:
*/
export class FloatField {

    constructor(name, field) {
        
        this.name = name;

        this.field = field;
    }

    validate() {

        //Returning true if the value can be parse floated, false if not
        if (!isNaN(this.name) && this.name.toString().indexOf('.') != -1)
        {
            alert('this is a numeric value and I\'m sure it is a float.');
            return true;
        }​ else {

            return false;
        }


    }

        //Returns a message
        getMessage() {

            return "`$<name>` must be a float value. You entered $<field>`";

        }


}
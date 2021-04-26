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


        let result = parseFloat( this.field );
        return !isNaN(result);


    }

        //Returns a message
        getMessage() {

            return "`$<name>` must be a float value. You entered $<field>`";

        }


}
/** 
   Title: required-field.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Creating class RequiredField with constructors, function
   Sources:
*/
export class RequiredField {

    constructor(name, field) {
        
        this.name = name;

        this.field = field;
    }


        validate() {

            //Will return true if this.field is a string value, false if not
            return Boolean(this.field);

        }

        //Returns a message
        getMessage() {

            return "`$<name>` is a required field.";

        }





}
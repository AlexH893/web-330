/** 
   Title: float-max-field.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Creating class FloatMaxField with constructors, function
   Sources: https://www.w3schools.com/jsref/jsref_parsefloat.asp
*/

export class FloatMaxField {


    constructor(name, field, max) {
        
        this.name = name;

        this.field = field;

        this.max = max;

    }

    validate() {

        if (this.field.parseFloat() > this.max) {

            return true;

        } else {

            return false;

        }
    }

    getMessage() {

        return "`$<name>` must be less than `$<max>`. You entered `$<field>`";

    }

















}
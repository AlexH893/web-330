/** 
   Title: float-min-field.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Creating class FloatMinField with constructors, function
   Sources: https://www.w3schools.com/jsref/jsref_parsefloat.asp
*/

export class FloatMinField {

    constructor(name, field, min) {
        
        this.name = name;

        this.field = field;

        this.min = min;

    }

    validate() {

        let value = parseFloat(this.field);
        return (value > this.min);

    }

    getMessage() {

        return this.name + " should be more than " + this.min + ". You entered " + this.field

    }




}
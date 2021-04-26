/** 
   Title: validator.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Validator class with functions

*/
import { RequiredField} from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

class validator {   
    validators = [];
    messages = [];

    constructor(name, field) {
        
        this.name = name;

        this.field = field;

}

    addRequiredField() {

        //Creating new instance of the RequiredField class, pushing the new instance to 
        //the validators array

        this.validators.push(new RequiredField(this.name, this.field));

    }

    addRequiredFloatField() {

        this.validators.push(new FloatField(this.name, this.field));

    }

    addFloatMinField(min) {

        this.validators.push(new FloatMinField(this.name, this.field, min));


    }

    addFloatMaxField(max) {

        this.validators.push(new FloatMaxField(this.name, this.field, max));

    }


    validate() {

        //Iterating over the validators array
        for (let i of this.validators) {

            //If false, push the iterated objects getMessage() function to the class
            //properties message array
            if(!i.validate()) {

                this.messages.push(i.getMessage());

            }

         return this.messages.length == 0;          

        }

    }
}
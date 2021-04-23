import { RequiredField } from "./required-field.js";
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

        

    }

}
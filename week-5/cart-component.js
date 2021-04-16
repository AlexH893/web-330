  /** 
   Title: cart-component.js
   Author: Alex Haefner
   Date: 4-16-2021
   Description: Class 
*/

//Extending HTMLElement ensures the custom element inherits the entire DOM API and means
// any properties/methods that you add to the class become part of the element's DOM interface.
class CartComponent extends HTMLElement {

    constructor(){

    //Calling super() function for the HTMLElement parent object
    super(HTMLElement);
    
    }

    connectedCallback() {

        this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (span id="cart-count"></span)
            `;

    }

}

//Define new custom element, pass in string value cart-component and Cart Component class
customElements.define("cart-component", CartComponent);
//sources https://www.w3schools.com/jsref/jsref_tofixed.asp


    let _beverages = []; let _appetizers = []; let _mainCourses = []; let _desserts = [];

    function addBeverage(beverage) {

        //Pushing the beverage object to the _beverages array.
        this._beverages.push(beverage);
    }

    function addAppetizer(appetizer) {

        this._appetizers.push(appetizer);

    }

    function addMainCourse(mainCourse) {

        this._mainCourses.push(mainCourse);
    }

    function addDessert(dessert){

        this._desserts.push(dessert);
    }

    function getTotal() {
        //Creating variable total with initial value of 0.
        let total = 0;

        //Using for loop to iterate over each array. Then calculate the total price of each object.
        //Using parseFloat to ensure results are returned in a floating point number.
        let beverageTotal = this._beverages.forEach(function(beverage) {
            
            total += parseFloat(beverage.price);

            //Returning total variable and setting precision to 2 decimal places.
            return total.toFixed(2);

        });

    }

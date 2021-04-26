/** 
   Title: finance-calculator.js
   Author: Alex Haefner
   Date: 4-23-2021
   Description: Creating class FinanceCalculator with constructors, function
   Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

*/
export class FinanceCalculator {

    static MONTHS_IN_YEAR = 12;

    //static function with 3 params
    static calculateFutureValue(monthlyPayment, rate, years) {

        //Create a variable named month and assign it the parameter years times the property
        //MONTHS_IN_YEAR.
        let month = years * FinanceCalculator.MONTHS_IN_YEAR;

        //Creating a variable named interestRate and assign it a calculation
        let interestRate = 1 + rate / 100;

        //Create a variable named presentValue and assign it the monthlyPayment parameter
        //times the months variable
        let presentValue = monthlyPayment * month;

        
        let futureValue = presentValue * (Math.pow(interestRate, months));

        //Returning futureValue with 2 decimal places
        return futureValue.toFixed(2);

    }


    static convertToCurrency() {

        //Create a variable named currencyFormatter, format with JS built in currencyFormatter
        let currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

        return currencyFormatter.format(field);
    }



}
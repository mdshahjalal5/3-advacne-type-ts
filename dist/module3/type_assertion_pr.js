"use strict";
//!n! as ni ac =>type assertion => nisa (any type not suggestion) => try catch(unknown ) => <> 
let assertion;
assertion = 'learning type assertion';
const split = assertion.split(" ");
console.log(split, '"split"');
const uppercase = assertion.toUpperCase();
console.log(uppercase, '"upper"');
const meterToCm = (meter) => {
    if (typeof meter === 'number') {
        return meter * 100;
    }
    if (typeof meter === 'string') {
        return parseFloat(meter) * 100;
    }
};
const meterString = meterToCm(3);
console.log(meterString, '"meterString"');
const resultToBeString = meterToCm("1000");
const meterNumber = meterToCm('10');
console.log(meterNumber, '"meteNum"');

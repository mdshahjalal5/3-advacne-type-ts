//!n! as ni ac =>type assertion => nisa (any type not suggestion) => try catch(unknown ) => <> 

// ---- -----// ----------------
let name332: unknown = "John Doe";

// This will throw a type error, because `name` is of type `unknown`
// and TypeScript doesn't know that it is a string.

name332.toUpperCase() // ? [ts] 'name332' is of type 'unknown'.

// ? rev! 5/24/2023, 7:21:21 AM 

// ? before using unknown type must check the type it is type guard 
if (typeof name332 === "string"){
    console.log(name332.toUpperCase());  // !un! 'name332' is of type 'unknown'.
}

// This will not throw a type error, because we've used a type assertion
// to tell TypeScript that `name` is a string.

console.log((<string>name332).toUpperCase());

// ?---------------------------------///--------------------------------------------------------

let assertion:any;
assertion = 'learning type assertion';
const split = assertion.split(" ");
console.log(split, '"split"');

const uppercase = (assertion as string).toUpperCase()
console.log(uppercase, '"upper"')


//? ------------------------------------/// --------------------------------

const meterToCm = (meter:number | string|undefined  ): string | number | undefined => {
    if (typeof meter === 'number') {
        return meter * 100;
    }
    if(typeof meter === 'string'){
        return parseFloat(meter) * 100;
    }
}

const  meterString = meterToCm(3)
console.log(meterString, '"meterString"')
const resultToBeString = <string>meterToCm("1000");
const meterNumber =<number> meterToCm('10')
console.log(meterNumber, '"meteNum"');


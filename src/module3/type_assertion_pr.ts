//!n! as ni ac =>type assertion => nisa (any type not suggestion) => try catch(unknown ) => <> 
let assertion:any;
assertion = 'learning type assertion';
const split = assertion.split(" ");
console.log(split, '"split"');

const uppercase = (assertion as string).toUpperCase()
console.log(uppercase, '"upper"')

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


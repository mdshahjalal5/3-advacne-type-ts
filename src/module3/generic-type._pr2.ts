type genArray<x,y> = {
    name:x, 
    readonly  age:y, 
}


const intro:genArray<string, number> = {
    name:"shahjalal", 
    age:20
}

// intro["age"] = 50 //? [ts] Cannot assign to 'age' because it is a read-only property.
console.log(intro);

console.table(intro);


//? ----------------------// ----------------------// ----------------------// ----------------------// ----------------------//


interface Property9{
    name: string;
    age: number;
}

 type Property<x, y, z>   = [x, y,z ]

const ami:Property<Property9, string, boolean> = [
    {name:'sha', 
    age:36, 

}, 
'shahjala', 
true
]

// ?-------------------------------------------// --------------------------------


function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

function lastElemeent<T>(arr:T[]):T| undefined {
    return arr[arr.length - 1];
}

const res = <string>lastElemeent(['ismail'])

console.log(res);



// ?-----------------------------------//--------------------------------------------------------// --------------------

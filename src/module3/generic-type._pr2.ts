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



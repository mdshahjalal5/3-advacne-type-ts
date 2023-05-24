// ? Type assertion is a way to tell the TypeScript compiler to treat an expression as a certain type, even when TypeScript cannot infer its type correctly. Type assertions in TypeScript are also known as type casting or type coercion in other programming languages.

let someValue: any = "Hello, World!";
let strLength: number = (<string>someValue).length;

console.log(strLength);



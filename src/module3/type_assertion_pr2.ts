// ? Type assertion is a way to tell the TypeScript compiler to treat an expression as a certain type, even when TypeScript cannot infer its type correctly. Type assertions in TypeScript are also known as type casting or type coercion in other programming languages.

let someValue: any = "Hello, World!";
let strLength: number = (<string>someValue).length;
console.log(strLength);
let strLength2: number = (<number>someValue).length; // ! [ts] Property 'length' does not exist on type 'number'.


// !?---------------------------------------//----------------------------------------------------------------


const identifier = 'MY identifier is olf fingerprint'
let identifierArray = (<string>identifier).split(' ')
console.log("🚀 ~ identifier:", identifier)

// ? ------------------------------------//----------------------------------------------------------------

const duplicate = 'this is duplicate'

const dsa = (duplicate as string).split(' ');
console.log(dsa);

// ? ------------------------------------//----------------------------------------------------------------


//  ! tabrab =>table>array>object=> console.table can use for  array and object

const person = {
  name: "John Doe",
  age: 35,
  occupation: "Software Engineer",
};

console.table(person);


const array = [
    'iyak', 
    'jammy', 
    'windows', 
    'linux',

]

console.table(array);



// ? _-----------------------------------------------------//------------------------------------------------
interface User7 {
  id: number;
  name: string;
  email: string;
}

const userResponse = {
  id: 123,
  name: 'John Doe',
  email: 'johndoe@example.com'
};

// Type assertion to tell TypeScript that userResponse is of type User
const user7 = userResponse as User7;

console.log(user7.id); // Output: 123
console.log(user7.name); // Output: John Doe
console.log(user7.email); // Output: johndoe@example.com


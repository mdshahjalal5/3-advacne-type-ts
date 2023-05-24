 //  !n! conditiona type 
// !n! ex 

type a = number; 
type b = string;
type c = boolean; 
type d = undefined; 

// !n! if a remains  string then e is string if not then go to the next condition
type e = a extends string ? string : b extends number ? string: null;


type talented = {
    english:string, 
    math:string;
}

// !n! check if the talented has the math key or not 

type Aa = keyof talented; // !n!  aa = english | math
type checkKey<x ,y> = y extends Aa ? true : false;

type checkMath =   checkKey<talented, 'math'>

type checkBangla = checkKey<'anything', 'bangla'>;


// !n! how to check if the object has the specific key or not 

type passed = {
    name:string,
    age:number
}

type key = keyof passed; // !n! key = name | age;


//? ----------------------------------------------------------/////------------------------------    --------------------------------------------------------

type genius = {
    name:string, 
    age:number, 
    is_true: boolean, 
}


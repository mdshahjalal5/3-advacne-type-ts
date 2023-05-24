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

// !n! check if the sheick has the math key or not 

type Aa = keyof talented; // !n!  aa = english | math
type checkKey<x ,y> = y extends Aa ? true : false;

type checkMath =   checkKey<talented, 'math'>

type checkBangla = checkKey<talented, 'bangla'>;


// !n! how to check if the object has the specific key or not 

type passed = {
    name:string,
    age:number
}

type key = keyof passed; // !n! key = name | age;


// -----------------------

type IfEmpty<T extends { length: number }> = T['length'] extends 0 ? true : false;

function isEmpty<T extends { length: number }>(arr: T): IfEmpty<T> {
  return arr.length === 0 ? true : false;
}

const emptyArray: string[] = [];
const nonEmptyArray = ['one', 'two'];

const emptyCheck1: boolean = isEmpty(emptyArray); // returns true
const emptyCheck2: boolean = isEmpty(nonEmptyArray); // returns false

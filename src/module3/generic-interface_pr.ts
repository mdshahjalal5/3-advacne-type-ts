// !n! generic interface 

interface MyInterface<T> {
    property1: T;
    property2: string;
    method1(param: T): void;
}

interface identity<x, y, z, a>{
    name:x, 
    age:y, 
    address?:z, 
    experience:a
    
}

const newPrincipal:identity<string, number, string, number> = {
    name:'ahmed', 
    age:20, 
    address:'kolkata', 
    experience:100
}



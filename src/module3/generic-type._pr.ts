// !n! generic type => pav => parameter => type = value

// !array difway
const numbers113:number[] = [3, 4, 5, ]
const numbers42:Array<number> = [3, 4.5, ]


type genericTouple2<x, y> = [x, y]

const touple2:genericTouple2<number, string> = [3, 'shah']

const touple3:genericTouple2<string, true> = [ 'sf',true]

interface introType{
    name:string, 
    age:number, 
    salary:number, 
    
}
type introTypeGen<x, y, z> = [x, y, z]
// !n! first x,y, z is type 2nd x, y, z is value 
const introType:introTypeGen<number, string, boolean> = [3, 'sha', true]
// ! generic interface 

interface introTypeGen3<a, b, c, d>{
    name:a, 
    age:b, 
    salary:c, 
    hobbies:d
}


const introGen:genericTouple2<introType, number> = [
    {name:'shah', age: 23, salary: 10000}, 3       
]

interface intro2 extends introType{
    isMarried?:boolean, 
}

const intro2:GenericArray<intro2> = [
    {name:'shah', age: 23, salary: 10000, 
    isMarried: true,},
    {name:'shah', age: 23, salary: 10000, 
    isMarried: true,},
    {name:'shah', age: 23, salary: 10000, 
    isMarried: true,},
    {name:'shah', age: 23, salary: 10000, 
    isMarried: true,},

]

// ! difway generic type
type genericTouple3<x, y, z> = [x,y, z]
const touple4:genericTouple3<object, string, boolean> = [{
    name:'shah',
},'shah', true]
// !n! generic in function 
//  ! pa ba => before param and after param
const getObj = (p1:number, p2:string):object =>{
    return {
        name:p2, 
        age:p1
    }
}

const student1 = getObj(19, 'abubokor')
console.log(student1, '"student12"');

const getIdentity = <A, b>(p1:A, p2:b): object =>{
    return {
        name:p1, 
        age:p2
    }
}


const student2 = getIdentity<string, number>('fs', 30)
console.log(student2, '"student23"');

// ?-------------------------------------//----------------------------------------------------------------



const myInfo33 = <x>(myinfo:x):object =>{
    return {
        ...myinfo, 
        isMarried:true, 
    }
}

const myInfores = <object>myInfo33({
    name: 'fs', 
    age: 30
})

console.log(myInfores, '"myinfores"')

// ?----------------------------------------------------------------------------------------------------------------//--------------------------------------------





function getFirst<T>(arr: T[]): T {
    return arr[0];
}


const resGet = <string>getFirst(['ismail'])
const ype = typeof resGet;
console.log(ype, '"tye"')


function generic<x, y, z, a, b, c>(p1:x, p2:y, p3:z, p4:a, p5:b, p6:c):[x, y, z, a, b, c]{
    return [p1, p2, p3, p4, p5, p6]
}
// !n! array as value

const ret = generic<number, string, Array<number>, boolean,  false, object>(1, 'sha', [3, 9, 8, 7, 10], true, false, {name:'sha'})
console.log(ret, '"ret"');

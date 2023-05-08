"use strict";
// !n! generic in function 
//  ! pa ba => before param and after param
const getObj = (p1, p2) => {
    return {
        name: p2,
        age: p1
    };
};
const student1 = getObj(19, 'abubokor');
console.log(student1, '"student12"');
const getIdentity = (p1, p2) => {
    return {
        name: p1,
        age: p2
    };
};
const student2 = getIdentity('fs', 30);
console.log(student2, '"student23"');
const myInfo33 = (myinfo) => {
    return Object.assign(Object.assign({}, myinfo), { isMarried: true });
};
const myInfores = myInfo33({
    name: 'fs',
    age: 30
});
console.log(myInfores, '"myinfores"');
function getFirst(arr) {
    return arr[0];
}
const resGet = getFirst(['ismail']);
const ype = typeof resGet;
console.log(ype, '"tye"');
function generic(p1, p2, p3, p4, p5, p6) {
    return [p1, p2, p3, p4, p5, p6];
}
// !n! array as value
const ret = generic(1, 'sha', [3, 9, 8, 7, 10], true, false, { name: 'sha' });
console.log(ret, '"ret"');

"use strict";
//!n! irex  => interface => reference type(farab) => extends => 
//!n! furab => function => array => object
const Person = {
    name: "John",
    age: 20,
    // address: "123 Main Street"
};
const myDog = {
    name: 'Buddy',
    bark() {
        console.log('Woof!');
    },
};
const interfaceVariable = {
    name: 'anything',
    bark() {
        console.log('Woof!');
        return 'sha';
    },
    age: 3,
    isMarried: true
};

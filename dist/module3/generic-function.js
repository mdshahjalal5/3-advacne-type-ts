"use strict";
//Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
const result1 = createArray1("Bangladesh", "I love My Country");
const result2 = createArray1(false, ["USA"]);
const result3 = createArray1({ name: "Bangladesh" }, false);
//Spread Operator
// const newData = {...myInfo ,crush};
const addMeInMyCrushMind = (myInfo) => {
    const crush = "kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 100000000,
};
const result5 = addMeInMyCrushMind(myInfo);

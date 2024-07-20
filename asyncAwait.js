"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function washing() {
    console.log("Washing Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing Done");
        }, 2000);
    });
}
// soaking 
function soaking() {
    console.log("Soaking Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking Done");
        }, 2000);
    });
}
// Drying
function drying() {
    console.log("Drying Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done");
        }, 2000);
    });
}
console.log("Hello World");
async function runWashingMachine() {
    try {
        const result = await washing();
        console.log(result);
        const result1 = await soaking();
        console.log(result1);
        const result2 = await drying();
        console.log(result2);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("I will not wash anymore");
    }
}
//   INVOKING 
runWashingMachine();
console.log("I am not making biryani");

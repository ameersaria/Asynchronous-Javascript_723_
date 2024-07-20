"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parentFunction(func) {
    // parameter should be a function   returning nothing
    console.log("This is a parent function");
    func(); // invoking childFunction
}
// childrenFunction body
function childrenFunction() {
    console.log("This is a children function");
}
// invoking parentFunction
parentFunction(childrenFunction); // childreFunction is argument here
///////////////// Nested Functions ////////////////
// a function inside the body of another function 
function outerFunction() {
    function innerFunction() {
        console.log("Hello from Inner Function");
    }
    innerFunction();
    console.log("Hello from Outer function");
}
outerFunction();

// setTimeout(() => {
//     console.log("Hello World");
// }, 2000); // prints hello world after 2 secs

// // Async Example 

// console.log("First");
// setTimeout(() => {
//     console.log("Hello World");
// }, 4000);
// console.log("Second");
// // Output :
// // First 
// // Second 
// // Hello World

// // Accessing a function in setTimeOut

console.log("One");
function greet(){
    console.log("Hello World");
}
setTimeout(greet, 2000);
console.log("Two");




"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   Making promise //
const promise = new Promise((resolve, reject) => {
    resolve("Hello World");
});
promise.then((value) => {
    console.log(value);
});

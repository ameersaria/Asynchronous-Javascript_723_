"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderPizza(callback) {
    console.log("Order Started...");
    setTimeout(() => {
        console.log("Order Done");
        callback();
    }, 2000);
}
// making pizza
function makePizza(callback) {
    console.log("Started Making Pizza");
    setTimeout(() => {
        console.log("Done Making Pizza");
        callback();
    }, 3000);
}
// delivering Pizza
function deliverPizza() {
    console.log("Delivering Pizza");
    setTimeout(() => {
        console.log("Pizza Delivered");
    }, 3000);
}
// ============= INVOKING All ==============
orderPizza(() => {
    makePizza(() => {
        deliverPizza();
    });
});
//  Phly orderPizza chalao us ky baad makePizza phir deliverPizza



function washing() {
  console.log("Washing Started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Washing Done");
    }, 2000);
  });
}
// soaking 
function soaking(){
    console.log("Soaking Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking Done");
        }, 2000);
    })
}
// Drying
function drying(){
    console.log("Drying Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done")
        }, 2000);
    })
}

// ======== INVOKING ALL ======== 

washing().then((washingValue)=>{console.log(washingValue);
    return soaking()
}).then((soakingValue)=>{
    console.log(soakingValue);
    return drying()
}).then((dryingValue)=>{
    console.log(dryingValue);
})
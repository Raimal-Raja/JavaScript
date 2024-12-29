let arr = [1,2,3,4,5,6,7,8,,9];

let evenArry = arr.filter((val)  => {
    return val % 2 ===0;
});
let OddArry = arr.filter((val)  => {
    return val % 2 !==0;
});

console.log(evenArry)
console.log(OddArry)
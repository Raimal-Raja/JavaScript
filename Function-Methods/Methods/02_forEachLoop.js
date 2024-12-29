// call back function
let arry  = [1,2,3,4,5]

// arry.forEach(function printValue(val){
//     console.log(val)
// });

arry.forEach((val, index, arry) => {
    console.log(val,index, arry)
})
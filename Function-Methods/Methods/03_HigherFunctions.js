// higher order function or methods are those methods 
//which take other function as parameter or return
// like forEach (loop in arrays)

let nums = [1,2,3,4,5];

let calcSquare = (num)  =>{
    console.log(num*num);
}
nums.forEach(calcSquare);
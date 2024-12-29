// special string or tamplate literal
// a way to have embedded expression in strings
let specialString = `this is a special string`;
console.log(typeof specialString);
// this is special becuase we can write veriable with string in single
// and avaoid repetition of concatenating it again and again
// like this 
let obj = {
    item: "pen",
    price: "30"
}
console.log("item is '"+obj.item + "' and it's price is '"+ obj.price + "'");
// instead of writing this we can simple write this using tamplate literal

let literalString = `The price of item ${obj.item} is ${obj.price}`;
console.log(literalString)

// String inerpolation = to create string by doing substitution of placeholders
// `string text ${exprestion/ veriable} string text`


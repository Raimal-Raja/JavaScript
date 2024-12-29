let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

let p = document.querySelector("p");
p.after(newbtn);
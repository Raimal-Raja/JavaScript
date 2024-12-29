window.onload = function(){
    let btn = document.querySelector(".btn");
    let currMode = "light";

    btn.addEventListener("click", () =>{
        if (currMode === "light"){
            currMode =  "dark";
            document.querySelector("body").style.backgroundColor = "black";
        }
        else{
            currMode = "light";
            document.querySelector("body").style.backgroundColor  = "white";
        }
        console.log(currMode);
    })
}
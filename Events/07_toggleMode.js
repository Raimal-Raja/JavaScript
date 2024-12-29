
window.onload = function(){
    let body = document.querySelector("body");
    let btn = document.querySelector(".btn");
    let currMode = "light";
    btn.addEventListener("click", (evt) =>{
        if (currMode ==="light"){
            currMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light")
        }
        else{
            currMode = "light";
            body.classList.add("light");
            body.classList.remove("dark")
        }
        console.log(currMode)
    })
}
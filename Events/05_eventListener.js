window.onload = function(){

    let btn = document.querySelector("#btn1");

    btn.addEventListener("click", (evt) => {
        console.log("button was clicked handler1");
    });

    btn.addEventListener("click", (evt) => {
        console.log("button was clicked handler2");
    });
}
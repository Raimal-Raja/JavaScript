window.onload = function(){
    let btn = document.querySelector("#btn1");
    
        btn.onclick = () => {
            console.log("btn1 was clicked");
            let a = 24;
            a++;
            console.log(a); 
        };
    };
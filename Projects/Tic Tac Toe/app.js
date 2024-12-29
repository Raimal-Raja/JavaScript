window.onload = function () {
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("#reset-btn");
    let msgContainer = document.querySelector(".msg-container");
    let newGamebtn = document.querySelector("#new-btn");
    let msg = document.querySelector("#msg");
    


    let turn0 = true;
  
    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetGame = () =>{
        turn0 = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
  
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        // console.log("box was clicked!"); 
        if(turn0){
            box.innerText =  "O";
            turn0 = false;
            box.style.color ="rgb(244, 5, 208)";
        }
        else{
            box.innerText ="X";
            turn0 = true;
            box.style.color ="rgb(2, 0, 1)";
            
        }
        box.disabled = true;
        checkWinner();
      });
    });

    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    }

    const disabledBoxes = () =>{
        for (let box of boxes){
            box.disabled = true;
        };
    };

    const showWinner = (winner) =>{
        msg.innerText = `Congratulations! The Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }

    const checkWinner = () =>{
        for(let pattern of winPatterns){
            // console.log(pattern[0], pattern[1], pattern[2]);
            // console.log(
            //     boxes[pattern[0]].innerText, 
            //     boxes[pattern[1]].innerText, 
            //     boxes[pattern[2]].innerText
            // );


            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText; 
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" || pos3Val != ""){
                if (pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("winner", pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
    };
    newGamebtn.addEventListener("click", resetGame);
    resetbtn.addEventListener("click", resetGame);
  };


// window.onload = function () {
//     // Get all elements with class 'box'
//     let boxes = document.querySelectorAll(".box");
//     let resetBtn = document.querySelector("#reset-btn");
//     let turnO = true; // Changed from turn0 to turnO for clarity
  
//     const winPatterns = [
//       [0, 1, 2],
//       [0, 3, 6],
//       [0, 4, 8],
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 4, 5],
//       [6, 7, 8],
//     ];
  
//     // Check if boxes were found
//     if (boxes.length === 0) {
//         console.error("No elements with class 'box' were found!");
//         return;
//     }

//     boxes.forEach((box) => {
//       box.addEventListener("click", () => {
//         console.log("box was clicked!");
//         // Add your game logic here
//         if (turnO) {
//             box.innerText = "O";
//         } else {
//             box.innerText = "X";
//         }
//         turnO = !turnO;
//       });
//     });
// };
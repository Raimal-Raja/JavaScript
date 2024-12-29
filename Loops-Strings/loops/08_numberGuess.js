let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while(userNum != gameNum){
    userNum = prompt("wrong! Guess the game number again : ");
}
console.log("Congratualations! you right");
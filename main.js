function start()  {
    location.href = 'game.html';
}
let choice = ["Scissors", "Paper", "Rock"];
let random = Math.floor(Math.random() * 3);
function game() {
    return choice[random];   
}
console.log(game());

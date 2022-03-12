function computerPLay() {
    let num = Math.random()
    if (num < 0.33) {
        return "R"
    }
    else if (num > 0.66){
        return "P"
    }else return "S"
}
function playerPlay() {
    let playerSel = prompt("Choose rock(R), paper(P) or scissors(S)")
    return playerSel.toUpperCase()
}

let player = 0;
let computer = 0;
function singleRound(playerSelection, computerSelection) {
   if (playerSelection === "R" && computerSelection === "S") {
       alert("You won! Rock beats scissors!")
       return player += 1
   }else if (playerSelection === "R" && computerSelection === "P") {
       alert("You lost! Paper beats scissors!")
       return computer += 1
   }else if (playerSelection === "R" && computerSelection === "R") {
        alert("Nobody wins this round! Try again!")
        return "Tie"
   }else if (playerSelection === "P" && computerSelection === "S") {
        alert("You lost! Scissors beats paper!")
        return computer += 1
   }else if (playerSelection === "P" && computerSelection === "P") {
        alert("Nobody wins this round! Try again")
        return "Tie"
   }else if (playerSelection === "P" && computerSelection === "R") {
        alert("You won! Paper beats rock!")
        return player += 1
   }else if (playerSelection === "S" && computerSelection === "S") {
        alert("Nobody wins this round! Try again!")
        return "Tie"
   }else if (playerSelection === "S" && computerSelection === "P") {
        alert("You won! Scissors beats paper!")
        return player += 1
   }else if (playerSelection === "S" && computerSelection === "R") {
        alert("You lost! Rock beats scissors")
        return computer += 1
   }else alert("Error! Please write only the letter - R, P or S.")
        return "Tie"
}

function game(){
    for(i=0;i<5;i++){
        if(singleRound(playerPlay(), computerPLay()) == "Tie") {
            i--
        }
        console.log(player, computer)
    }console.log(`Result is player:${player} and computer:${computer}`)

    if (player>computer) {
        console.log("You won against the computer!")
    }else console.log("You lost aginst the computer!")
}

game();
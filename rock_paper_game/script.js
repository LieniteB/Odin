function computerPlay() {
    let num = Math.random()
    if (num < 0.33) {
        return "R"
    }
    else if (num > 0.66){
        return "P"
    }else return "S"
}

let player = 0;
let computer = 0;
const div = document.querySelector("#display");
const h2 = document.createElement("h2");
function playRound(playerSelection, computerSelection) {
   if (playerSelection === "R" && computerSelection === "S") {
        h2.textContent = "You won! Rock beats scissors!"
        div.appendChild(h2)
       return player += 1
   }else if (playerSelection === "R" && computerSelection === "P") {
        h2.textContent = "You lost! Paper beats scissors!"
        div.appendChild(h2)
       return computer += 1
   }else if (playerSelection === "R" && computerSelection === "R") {
        h2.textContent = "Nobody wins this round! Try again!"
        div.appendChild(h2)
        return "Tie"
   }else if (playerSelection === "P" && computerSelection === "S") {
        h2.textContent = "You lost! Scissors beats paper!"
        div.appendChild(h2)
        return computer += 1
   }else if (playerSelection === "P" && computerSelection === "P") {
        h2.textContent = "Nobody wins this round! Try again!"
        div.appendChild(h2)
        return "Tie"
   }else if (playerSelection === "P" && computerSelection === "R") {
        h2.textContent = "You won! Paper beats rock!"
        div.appendChild(h2)
        return player += 1
   }else if (playerSelection === "S" && computerSelection === "S") {
        h2.textContent = "Nobody wins this round! Try again!"
        div.appendChild(h2)
        return "Tie"
   }else if (playerSelection === "S" && computerSelection === "P") {
        h2.textContent = "You won! Scissors beats paper!"
        div.appendChild(h2)
        return player += 1
   }else if (playerSelection === "S" && computerSelection === "R") {
        h2.textContent = "You lost! Rock beats scissors"
        div.appendChild(h2)
        return computer += 1
   }else alert("Error! Please write only the letter - R, P or S.")
        return "Tie"
}

    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        playRound("R", computerPlay())
        keepScore ()
        gameOver()
    })

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        playRound("P", computerPlay())
        keepScore ()
        gameOver()
        
    })
    
    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        playRound("S", computerPlay())
        keepScore ()
        gameOver()
    })

const finalScore = document.createElement("h1");

function gameOver() {
    if (player==5) {
        finalScore.textContent = `You won! ${computer}/${player}`;
        div.appendChild(finalScore);
        if (player==6 || computer==1){
            restart()
        }
        
    }else if (computer==5) {
        finalScore.textContent = `You lost! ${computer}/${player}`;
        div.appendChild(finalScore);
        if (player==1 || computer==6){
            restart()
        }
    }
}
const computerScore  = document.createElement("p");
const playerScore  = document.createElement("p");

function keepScore () {
        computerScore.textContent = `Computer score: ${computer}`
        div.appendChild(computerScore);
        
        playerScore.textContent = `Player score: ${player}`
        div.appendChild(playerScore);
}


function restart() {
    computer = 0;
    player = 0;
    div.removeChild(finalScore)
}

count = 1;
var Decisions = function() {
    if (count === 1) {
        playerChoice = prompt("Do you choose rock, paper or scissors?");
    } else {
        playerChoice = prompt("It's a tie. Please make your choice again! Do you choose rock, paper or scissors?");
    }
    computerChoice = Math.ceil(Math.random() *3);
        if (computerChoice < 1) {
        computerChoice = "rock";
    } else if(1 <= computerChoice <= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
} 
Decisions();
function compare(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        count = count + 1
        console.log("The result is a tie!");
        Decisions();
        return compare(playerChoice, computerChoice);
      }
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          return "Player Wins";
        } else {
          return "Computer Wins";
        }
      }
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          return "Computer Wins";
        } else {
          return "Player Wins";
        }
      }
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          return "Computer Wins";
        } else {
                  return "Player Wins";
        }
      }
  }
  console.log(compare(playerChoice, computerChoice));
  console.log("Wow, you played " + count + " games!");
        
      

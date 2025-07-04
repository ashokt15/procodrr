let userChoice = prompt("Enter your move: rock, paper, or scissors").toLowerCase();
let options = ["rock", "paper", "scissors"];

// Generate random computer choice
let computerChoice = options[Math.floor(Math.random() * 3)];

alert(`Computer chose: ${computerChoice}`);

if (userChoice === computerChoice) {
    alert("It's a draw!");
} else {
    switch (userChoice) {
        case "rock":
            switch (computerChoice) {
                case "scissors":
                    alert("You win! Rock beats scissors.");
                    break;
                case "paper":
                    alert("You lose! Paper beats rock.");
                    break;
            }
            break;

        case "paper":
            switch (computerChoice) {
                case "rock":
                    alert("You win! Paper beats rock.");
                    break;
                case "scissors":
                    alert("You lose! Scissors beats paper.");
                    break;
            }
            break;

        case "scissors":
            switch (computerChoice) {
                case "paper":
                    alert("You win! Scissors beats paper.");
                    break;
                case "rock":
                    alert("You lose! Rock beats scissors.");
                    break;
            }
            break;

        default:
            alert("Invalid input. Please enter rock, paper, or scissors.");
    }
}

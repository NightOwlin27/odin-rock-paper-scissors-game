const rock = document.querySelector('.btn.rock')
const paper = document.querySelector('.btn.paper')
const scissors = document.querySelector('.btn.scissors')

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

const choices = ["rock", "scissors", "paper"];

rock.addEventListener('click', function () {
    let computerChoice = getComputerChoice.value
    humanChoice = choices[1];
    playRound(humanCoice, computerChoice);
})

paper.addEventListener('click', function () {
    humanChoice = choices[1];
    playRound(humanCoice);
})

function getComputerChoice () {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

// function getHumanChoice () {
//     rock = choices[0]
//     paper = choices[1]
//     scissors = choices[2]

// }

function playRound () {
    computer
    console.log(humanChoice)
}


// let humanScore = 0;
// let computerScore = 0; 

// function getHumanChoice () {
//     const choices = ["rock", "scissors", "paper"];
//     let choice = prompt ('choose rock, paper, or scissors').toLowerCase();
    
//     if (choices.includes(choice)) {
//         return choice;
//     } else {
//         console.log("You didn't choose a valid option");
//     }
// }

 
// function playRound(humanChoice, computerChoice) {
    // let = choices[0] = choices[0];
    // let = choices[1] = choices[1];
    // let = choices[2] = choices[2];
    // let = choices[0] > choices[1];
    // let = choices[1] > choices[2];
    // let = choices[2] > choices[0];

    // if (computerChoice > humanChoice) {
    //     computerScore += 1;
    //     console.log("Computer scores 1 point!");
    // } else if (computerChoice < humanChoice) {
    //     humanScore += 1;
    //     console.log("You scored 1 point!");
    // } else if (computerChoice === humanChoice) {
    //     humanScore = humanScore;
    //     computerScore = computerScore;
    //     console.log("It's a draw!");
    // }
// }

// playRound(humanSelection, computerSelection);
// // I do not yet understand why I have to call this function in order to have 5 rounds. 
// // Without it, the first prompt works but the round is not played. All four rounds after are then played with no issues.

// function playGame () {
//     for (let i = 0; i < 4; i++) {
//         const computerSelection = getComputerChoice();
//         const humanSelection = getHumanChoice();
//         playRound(humanSelection, computerSelection);
//     }
// // Should I make this a separate function? getScore?
//     if (humanScore > computerScore) {
//         console.log(`Thats the end of the match! You Win!`);
//     } else if (computerScore > humanScore) {
//         console.log(`Thats the end of the match! You Lost!
//                             Computer Wins!`);
//     } else if (humanScore === computerScore) {
//         console.log(`Thats the end of the match! It's a draw!`);
//     }
//         console.log(`
//                     Human Score: ${humanScore}
//                     Computer Score: ${computerScore}`);
// }

// playGame();





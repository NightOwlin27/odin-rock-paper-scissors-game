const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector('.btn.rock')
const paper = document.querySelector('.btn.paper')
const scissors = document.querySelector('.btn.scissors')

let humanScore = 0;
let computerScore = 0; 
let playRoundCount = 0;

rock.addEventListener('click', function () {
    let humanChoice = choices[0];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log(humanChoice, computerChoice)
    playRoundCount += 1;
    console.log(playRoundCount)
    playGame();
})

paper.addEventListener('click', function () {
    let humanChoice = choices[1];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log(humanChoice, computerChoice)
    playRoundCount += 1;
    console.log(playRoundCount)
    playGame();
})

scissors.addEventListener('click', function () {
    let humanChoice = choices[2];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log(humanChoice, computerChoice)
    playRoundCount += 1;
    console.log(playRoundCount)
    playGame();
})

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}
    
//  I had to switch the array choices to vice versa in order to get a correct match between the
// player and computer and I do not yet understand why.

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        humanScore = humanScore;
        computerScore = computerScore;
        console.log("It's a draw");
    } else if (
        (humanChoice === choices[0] && computerChoice === choices[2]) ||
        (humanChoice === choices[1] && computerChoice === choices[0]) ||
        (humanChoice === choices[2] && computerChoice === choices[1])
    ) {
        humanScore += 1;
        console.log("You scored 1 point!");
    } else {
        computerScore += 1;
        console.log("Computer scores 1 point!");
    }  
}

function playGame () {
    if (playRoundCount === 5) {
        getFinalScore();
    }
}

function getFinalScore () {
    if (humanScore > computerScore) {
        console.log(`Thats the end of the match! You Win!`);
    } else if (computerScore > humanScore) {
        console.log(`Thats the end of the match! You Lost!
                                Computer Wins!`);
    } else if (humanScore === computerScore) {
        console.log(`Thats the end of the match! It's a draw!`);
    }
        console.log(`
                Human Score: ${humanScore}
                Computer Score: ${computerScore}`);
    }







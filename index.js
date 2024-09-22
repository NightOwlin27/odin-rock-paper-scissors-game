const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector('.btn.rock');
const paper = document.querySelector('.btn.paper');
const scissors = document.querySelector('.btn.scissors');
const playerScore = document.querySelector('.player.score');
const cpuScore = document.querySelector('.cpu.score');
const prompt = document.querySelector(".prompt");

const svgRockContainer = document.querySelector('.player.icon')
const svgRock = `<img class="svg" src = "images/rock.svg" alt="a rock icon" width="150px" height="auto">`

const svgPaperContainer = document.querySelector('.player.icon')
const svgPaper = `<img class="svg" src = "images/paper.svg" alt="a paper icon" width="100px" height="auto">`

const svgScissorsContainer = document.querySelector('.player.icon')
const svgScissors = `<img class="svg" src = "images/scissors.svg" alt="a scissors icon" width="130px" height="auto">`

let humanScore = 0;
let computerScore = 0; 
let playRoundCount = 0;

playerScore.textContent += humanScore;
cpuScore.textContent += computerScore;

rock.addEventListener('click', function () {

   svgRockContainer.innerHTML = svgRock;

    let humanChoice = choices[0];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    playRoundCount += 1;
    playGame();
})

paper.addEventListener('click', function () {
    
    svgPaperContainer.innerHTML = svgPaper;

    let humanChoice = choices[1];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    playRoundCount += 1;
    playGame();
})

scissors.addEventListener('click', function () {
    
    svgScissorsContainer.innerHTML = svgScissors;

    let humanChoice = choices[2];
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    playRoundCount += 1;
    playGame();
})

// Event Listener functions need to be consolidated

function getComputerChoice () {

    const svgRockContainer = document.querySelector('.cpu.icon')
    const svgPaperContainer = document.querySelector('.cpu.icon')
    const svgScissorsContainer = document.querySelector('.cpu.icon')
    const computerChoice = Math.floor(Math.random() * choices.length);

    if (choices[computerChoice] === choices[0]) {
        svgRockContainer.innerHTML = svgRock;
    } else if (choices[computerChoice] === choices[1]) {
        svgPaperContainer.innerHTML = svgPaper;
    } else if (choices[computerChoice] === choices[2]) {
        svgScissorsContainer.innerHTML = svgScissors;
    }
    return choices[computerChoice];
}


function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        humanScore = humanScore;
        computerScore = computerScore;
        console.log("It's a draw");
        prompt.textContent = `It's a draw`;
    } else if (
        (humanChoice === choices[0] && computerChoice === choices[2]) ||
        (humanChoice === choices[1] && computerChoice === choices[0]) ||
        (humanChoice === choices[2] && computerChoice === choices[1])
    ) {
        humanScore += 1;
        console.log("You scored 1 point!");
        prompt.textContent = `You scored 1 point!`;
        playerScore.textContent = humanScore;
    } else {
        computerScore += 1;
        console.log("Computer scores 1 point!");
        prompt.textContent = `CPU scores 1 point!`;
        cpuScore.textContent = computerScore;
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
        prompt.textContent = `Thats the end of the match! You Win!`;

    } else if (computerScore > humanScore) {
        console.log(`Thats the end of the match!
                                CPU Wins!`);
        prompt.textContent = `Thats the end of the match! CPU Wins!`;
    } else if (humanScore === computerScore) {
        console.log(`Thats the end of the match! It's a draw!`);
        prompt.textContent = `Thats the end of the match! It's a draw!`;
    }
        console.log(`
                Human Score: ${humanScore};
                Computer Score: ${computerScore}`);
        prompt.textContent += `
                Human Score: ${humanScore}
                Computer Score: ${computerScore}`;
    }

// function scoreReset () {
//      humanScore = 0;
//     computerScore = 0; 
//     playRoundCount = 0;
// }

// Still need a working score reset function





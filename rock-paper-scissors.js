// object create
const score = {
    wins: 0,
    losess: 0,
    ties: 0

};

// uodate the score function call
updateScore();


// functon to use and parameters to pass the value
function playGame(playerMove) {
    const computerMove = pickComputerMove();//call the function

    console.log(computerMove);
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }

    }
    //update the result of the project

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losess += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    // uodate the score function call
    updateScore();

    //innerHtml queryselector to used
    // after click only performance will be dispaly

    document.querySelector('.js-result').
        innerHTML = result;

    document.querySelector('.js-move').
        innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;


    /*// popup to display used in the code 
       alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result} 
Wins:${score.wins}, Losses:${score.losess}, Ties:${score.ties}`);
*/
}

function updateScore() {
    // score update to used in the display
    document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}, Losses:${score.losess}, Ties:${score.ties}`;
}

function pickComputerMove() {

    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
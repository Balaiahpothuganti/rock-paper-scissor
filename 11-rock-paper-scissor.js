let score =  JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}

updateScoreElement();



function playerMove(playerMove) {

  let result = '';
  const computerMove = pickComputerMove() ;

  if (playerMove === 'scissor') {
      if (computerMove === 'rock') {
        result = 'You lose';
      } else if (computerMove === 'paper') {
        result = 'You win';
      } else if (computerMove === 'scissor') {
        result = 'Tie';
      }


  } else if (playerMove === 'paper') {
     
      if (computerMove === 'rock') {
        result = 'You win';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissor') {
        result = 'You lose';

      }

      

    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie';
      } else if (computerMove === 'paper') {
        result = 'You lose';
      } else if (computerMove === 'scissor') {
        result = 'You win';
      }
    }
    if (result === 'You win') {
      score.Wins += 1;
    } else if (result === 'You lose') {
      score.Losses += 1;
    } else if (result === 'Tie') {
      score.Ties += 1;
    }

    document.querySelector('.js-game-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img class="rock-icon" src="./icons/${playerMove}-emoji.png">  <img  class="paper-icon"src="./icons/${computerMove}-emoji.png"> computerMove`;
    updateScoreElement();
   

    localStorage.setItem('score',JSON.stringify(score));

  
    /*
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.Wins},Losses: ${score.Losses},Ties: ${score.Ties}`);
  console.log(score);
  */
}

   function updateScoreElement() {
      document.querySelector('.js-score').innerHTML=` Wins: ${score.Wins},Losses: ${score.Losses},Ties: ${score.Ties}`;

    }








function pickComputerMove() {

  const randomNumber = Math.random();
  console.log(randomNumber);
  // const rand=Math.floor(Math.random()*3)+1;
  // console.log(rand);
  let computerMove = '';

  if (randomNumber >= 0 &&  randomNumber < 1 / 3)  {
    computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
 // console.log(computerMove3);
 return computerMove;
 

}
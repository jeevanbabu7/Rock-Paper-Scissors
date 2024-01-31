var score = JSON.parse(localStorage.getItem('score')) || 
    (score = {
      win : 0,
      lose : 0,
      tie : 0
    });

    updateScore();

    const randGen = () => {
      const randomNumber = Math.random();
      let computerMove = '';
      if(randomNumber >= 1 && randomNumber <= 1/3)
        computerMove = 'Rock';
      else if(randomNumber > 1/3 && randomNumber < 2/3)
        computerMove = 'Paper';
      else
        computerMove = 'Scissors';
             
      return computerMove;
    }
    const display = (userMove,computerMove,result) => {
      alert(`You picked ${userMove} and computer picked ${computerMove}. ${result}.
wins : ${score.win} Loses: ${score.lose} Tie: ${score.tie}`);
    }

    function updateScore(){
      document.querySelector('.js-score').innerHTML = `wins : ${score.win} Loses: ${score.lose} Tie: ${score.tie}`;
    }

    const playGame = (userMove) => {
      const computerMove = randGen();
      let result = '';
      if(userMove == 'Rock') {
        
        if(computerMove == 'Rock') 
          result = 'Tie';
        else if(computerMove == 'Paper') 
          result = 'You Lose';
        else result = 'You Win';
      }
      else if(userMove == 'Paper') {
        if(computerMove == 'Paper') 
          result = 'Tie';
        else if(computerMove == 'Scissors') 
          result = 'You Lose';
        else result = 'You Win';
      }
      else {
        if (computerMove == 'Scissors') 
          result = 'Tie';
        else if (computerMove == 'Rock') 
          result = 'You Lose';
        else 
          result = 'You Win';
      }
      if(result == 'You Win') score.win += 1;
      else if(result == 'You Lose') score.lose+=1;
      else score.tie += 1;

      localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `    You
    <img src="${userMove}-emoji.png" alt="" class="icon">
    <img src="${computerMove}-emoji.png" alt="" class="icon">
    Computer</p>`;

      updateScore();

      // display(userMove,computerMove,result);
    }
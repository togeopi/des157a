(function(){
    'use strict';
    console.log('reading js');

    const help = document.querySelector('a');
    const instructions = document.getElementById('instructions');
    const close = document.getElementById('close');

    help.addEventListener('click', function(event){
        event.preventDefault();
        instructions.className = 'showing';
    });

    close.addEventListener('click', function(){
        instructions.className = 'hidden';
    });

    (function(){

        // //This gets the current player: 
        // gameData.players[gameData.index]
    
        // //This gets the first die and the second die: 
        // gameData.dice[gameData.roll1-1]
        // gameData.dice[gameData.roll2-1]
    
        // //This gets the score of the current player: 
        // gameData.score[gameData.index]
    
        // //This gets the index, or turn
        // gameData.index
    
        // //This gets the individual dice values and the added dice value
        // gameData.roll1
        // gameData.roll2
        // gameData.rollSum
    
        // //This gets the winning threshold
        // gameData.rollSum
    
        'use strict'
        console.log('reading JS');
    
        const startGame = document.querySelector('#startgame');
        const gameControl = document.querySelector('#gamecontrol');
        const game = document.querySelector('#game');
        const score = document.querySelector('#score');
        const actionArea = document.querySelector('#actions');
    
        const gameData = {
            dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
            players: ['player 1', 'player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
        };
    
        startGame.addEventListener('click', function(){
            //randomly set game index here
            gameData.index = Math.round(Math.random());
            console.log(gameData.index);
    
            
            gameControl.innerHTML = '<button id="quit">quit</button>';
    
            document.getElementById('quit').addEventListener('click', function(){
                location.reload();
            });
    
            setUpTurn();
        });
    
        function setUpTurn(){
            game.innerHTML = `<p><strong>roll the dice for the ${gameData.players[gameData.index]}</strong></p>`;
            actionArea.innerHTML = '<button id="roll">roll the dice</button>';
            document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            });
        }
    
        function throwDice(){
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random()*6) + 1;
            gameData.roll2 = Math.floor(Math.random()*6) + 1;
            game.innerHTML = `<p><strong>roll the dice for the ${gameData.players[gameData.index]}</strong></p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
            <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
    
            //if two 1's are rolled
            if(gameData.rollSum === 2){
                // console.log('snake eyes were rolled');
                game.innerHTML += '<p>oh snap snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                //show current score
                showCurrentScore();
                setTimeout(setUpTurn, 2000);
            }
            else if(gameData.roll1 === 1 || gameData.roll2 ===  1){
                // console.log('one of the two dice was a 1');
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p><strong>sorry one of your rolls was one :(, switching to ${gameData.players[gameData.index]}</strong></p>`;
                setTimeout(setUpTurn, 2000);
            }
            else {
                // console.log('the game proceeds');
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">roll again</button> or <button id="pass">pass</button>';
    
                document.getElementById('rollagain').addEventListener('click', function(){
                    setUpTurn();
                });
    
                document.getElementById('pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
                checkWinningCondition();
            }
        }
    
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
    
                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = 'new game';
            } else {
                showCurrentScore();
            }
        }
    
        function showCurrentScore(){
            score.innerHTML = `<p>player 1 score: <strong>${gameData.score[0]}</strong> / player 2 score: <strong>${gameData.score[1]}</strong></p>`;
        }
    
    })();
})();
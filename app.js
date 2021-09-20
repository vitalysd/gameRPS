let moves = ['rock.svg', 'paper.svg', 'scissor.svg'];

const rockBtn = document.querySelector('.rock'),
      paperBtn = document.querySelector('.paper'),
      scissorBtn = document.querySelector('.scissor');

let userScore = 0,
    compScore = 0;

let userScoreHtml = document.querySelector('.user-score');
let compScoreHtml = document.querySelector('.comp-score');

let result = document.querySelector('.result');

let userPlay = document.querySelector('#user-play');
let compPlay = document.querySelector('#comp-play');

let audioWin = document.getElementById('win');
let audioLose = document.getElementById('lose');
let audioClick = document.getElementById('click');

rockBtn.addEventListener('click', () => {
    audioClick.play();
    rock();
});
paperBtn.addEventListener('click', () => {
    audioClick.play();
    paper();
});
scissorBtn.addEventListener('click', () => {
    audioClick.play();
    scissor();
});

function rock() {
    let randomMoves = Math.floor(Math.random()*moves.length);

    compPlay.src = moves[randomMoves];
    userPlay.src = 'rock.svg';

    if (randomMoves == 0) {
        
        result.style.color = '#8a8a8a';
        result.innerHTML = 'Нечья!'

    } else if (randomMoves == 1) {

        result.style.color = '#FF30D6';
        result.innerHTML = 'Ой, вот неудача((';
        audioLose.play();

        compScore++;
        compScoreHtml.innerHTML = 'Не ты: ' + compScore;

    } else {

        result.style.color = '#5BFF62';
        result.innerHTML = 'Молодец))';
        audioWin.play();

        userScore++;
        userScoreHtml.innerHTML = 'Ты: ' + userScore;

    }

}

function paper() {
    let randomMoves = Math.floor(Math.random()*moves.length);

    compPlay.src = moves[randomMoves];
    userPlay.src = 'paper.svg';

    if (randomMoves == 0) {

        result.style.color = '#5BFF62';
        result.innerHTML = 'Молодец))';
        audioWin.play();

        userScore++;
        userScoreHtml.innerHTML = 'Ты: ' + userScore;
        
    } else if (randomMoves == 1) {

        result.style.color = '#8a8a8a';
        result.innerHTML = 'Нечья!'

    } else {

        result.style.color = '#FF30D6';
        result.innerHTML = 'Ой, вот неудача((';
        audioLose.play();

        compScore++;
        compScoreHtml.innerHTML = 'Не ты: ' + compScore;

    }

}

function scissor() {
    let randomMoves = Math.floor(Math.random()*moves.length);

    compPlay.src = moves[randomMoves];
    userPlay.src = 'scissor.svg';

    if (randomMoves == 0) {

        result.style.color = '#FF30D6';
        result.innerHTML = 'Ой, вот неудача((';
        audioLose.play();

        compScore++;
        compScoreHtml.innerHTML = 'Не ты: ' + compScore;
        
    } else if (randomMoves == 1) {

        
        result.style.color = '#5BFF62';
        result.innerHTML = 'Молодец))';
        audioWin.play();

        userScore++;
        userScoreHtml.innerHTML = 'Ты: ' + userScore;

    } else {

        result.style.color = '#8a8a8a';
        result.innerHTML = 'Нечья!'

    }

}



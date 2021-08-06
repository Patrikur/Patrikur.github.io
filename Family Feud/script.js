import { questions } from "./questions.js";

const question = document.getElementById('question');
const answers = document.getElementById('answers');
const points = document.getElementById('points');
const crossTeamL = document.getElementById('cross-teamL');
const crossTeamR = document.getElementById('cross-teamR');
const teamLName = document.getElementById('teamL-name');
const teamRName = document.getElementById('teamR-name');
const teamLPoints = document.getElementById('teamL-points');
const teamRPoints = document.getElementById('teamR-points');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const currentRound = document.getElementById('currentRound');

//Basic settings
let teamL;
let teamR;

let round = 0;

let turn;

let scoreL = 0;
let scoreR = 0;
let scoreRound = 0;

question.innerHTML = `${questions[round].question}`;

function loadRound (round){
  for(let i=1; i< Object.keys(questions[round]).length; i++){
    answers.innerHTML += `
    <p>${i}. <span id="answer${i}"></span></p>
    `
    points.innerHTML += `
    <p id="points${i}">0</p>
    `
  }
  currentRound.innerText = scoreRound;
  teamLPoints.innerText = scoreL;
  teamRPoints.innerText = scoreR;  
}

loadRound(round);

//Choose team
window.addEventListener('keyup', (e) =>{
    switch(e.key){
        case 'ArrowLeft':
            leftArrow.classList.add('active');
            rightArrow.classList.remove('active');
            turn = "left";
            break;
        case 'ArrowRight':
            rightArrow.classList.add('active');
            leftArrow.classList.remove('active');
            turn = "right";
    }
})

//Get answers and points
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');
const answer6 = document.getElementById('answer6');
const points1 = document.getElementById('points1');
const points2 = document.getElementById('points2');
const points3 = document.getElementById('points3');
const points4 = document.getElementById('points4');
const points5 = document.getElementById('points5');
const points6 = document.getElementById('points6');

window.addEventListener('keyup', (e) =>{
    switch(e.key){
    case '1':
        answer1.innerHTML = `${questions[round][1].answer}`;
        points1.innerHTML = `${questions[round][1].points}`;
        scoreRound += questions[round][1].points;
        currentRound.innerText = scoreRound;
        break;
    case '2':
        answer2.innerHTML = `${questions[round][2].answer}`;
        points2.innerHTML = `${questions[round][2].points}`;
        scoreRound += questions[round][2].points;
        currentRound.innerText = scoreRound;
        break;
    case '3':
        answer3.innerHTML = `${questions[round][3].answer}`;
        points3.innerHTML = `${questions[round][3].points}`;
        scoreRound += questions[round][3].points;
        currentRound.innerText = scoreRound;
        break;
    case '4':
        answer4.innerHTML = `${questions[round][4].answer}`;
        points4.innerHTML = `${questions[round][4].points}`;
        scoreRound += questions[round][4].points;
        currentRound.innerText = scoreRound;
        break;        
    case '5':
        answer5.innerHTML = `${questions[round][5].answer}`;
        points5.innerHTML = `${questions[round][5].points}`;
        scoreRound += questions[round][5].points;
        currentRound.innerText = scoreRound;
        break;
    case '6':
        answer6.innerHTML = `${questions[round][6].answer}`;
        points6.innerHTML = `${questions[round][6].points}`;
        scoreRound += questions[round][6].points;
        currentRound.innerText = scoreRound;
        break;
    case 'x':
        if(turn === "left" && crossTeamL.innerText.length <= 2){
            crossTeamL.innerText += 'X';
            if(crossTeamL.innerText.length === 3){
                rightArrow.classList.add('active');
                leftArrow.classList.remove('active');
                turn = "right";
            }
        } else if (turn === "right" && crossTeamR.innerText.length <= 2) {
            crossTeamR.innerText += 'X';
            if(crossTeamR.innerText.length === 3){
                leftArrow.classList.add('active');
                rightArrow.classList.remove('active');
                turn = "left";
            }
        } else if(turn === "left" && crossTeamR.innerText.length === 3){
            crossTeamL.innerText += 'XXX';
        } else if(turn === "right" && crossTeamL.innerText.length === 3){
            crossTeamL.innerText += 'XXX';
        }
    }
})


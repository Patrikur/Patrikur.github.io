import { questions } from "./questions.js";

const main = document.getElementById('main');
const answerSection = document.getElementById('answerSection');
const questionSection = document.getElementById('questionSection');
const crossSection = document.getElementById('crossSection');
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
const footer = document.getElementById('footer');
const failSound = new Audio('/Family Feud/Sounds/web_sounds_fail.mp3');
const intro = new Audio('/Family Feud/Sounds/web_sounds_intro.mp3');
const rightNum = new Audio('/Family Feud/Sounds/web_sounds_rightNumber.mp3');
const rightTxt = new Audio('/Family Feud/Sounds/web_sounds_rightText.mp3');

//Basic settings
let teamL = teamLName.innerText;
let teamR = teamRName.innerText;

let round = 0;
let playingRound = true;

let turn;

let scoreL = 0;
let scoreR = 0;
let scoreRound = 0;

//Choose random team
function randomTeam(){
    const rng = Math.round(Math.random()*100);
    if(rng % 2 === 0){
        leftArrow.innerHTML = `&#9679;`;
        rightArrow.innerHTML = `&#9676;`;
        turn = "left";  
    } else {
        rightArrow.innerHTML = `&#9679;`;
        leftArrow.innerHTML = `&#9676;`;
        turn = "right";
    }
}

//Finish round and add points to total
function finishRound(){
    if(turn === "left"){
        scoreL += scoreRound;
        teamLPoints.innerText = scoreL;
        playingRound = false; 
    } else if (turn === "right"){
        scoreR += scoreRound;
        teamRPoints.innerText = scoreR;
        playingRound = false;
    }
}

//load current round
function loadRound (round){
    if(round != 0){
        let roundAnswers = document.querySelectorAll('.roundAnswer');
        roundAnswers.forEach(roundAnswer => {
            roundAnswer.remove();
        })
    }
    crossTeamR.innerText = "";
    crossTeamL.innerText = "";

    for(let i=1; i< Object.keys(questions[round]).length; i++){
        answers.innerHTML += `
        <p class="roundAnswer">${i}. <span id="answer${i}"></span></p>
        `
        points.innerHTML += `
        <p class="roundAnswer" id="points${i}">0</p>
        `
    }
    question.innerHTML = `${questions[round].question}`;
    scoreRound = 0;
    currentRound.innerText = scoreRound;
    teamLPoints.innerText = scoreL;
    teamRPoints.innerText = scoreR;
    playingRound = true;
    randomTeam();
    loadDOM();    
}

loadRound(round);

//load final screen
function finalScore(){
    footer.remove();
    answerSection.remove();
    questionSection.remove();
    crossSection.remove();
    if(scoreL > scoreR){
        main.innerHTML = `
        <div class="final-score" id="finalScore">
            <h2>WINNERS</h2>
            <p>${teamL}</p>
        </div>
        `;
    } else{
        main.innerHTML = `
        <div class="final-score" id="finalScore">
            <h2>WINNERS</h2>
            <p>${teamR}</p>
        </div>
        `;
    }
}

//Get answers and points
function loadDOM(){
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
}

window.addEventListener('keyup', (e) =>{
    switch(e.key){
    case '1':
        if(points1.innerHTML != `${questions[round][1].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer1.innerHTML = `${questions[round][1].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points1.innerHTML = `${questions[round][1].points}`;
                rightNum.play();
                scoreRound += questions[round][1].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer1.innerHTML = `${questions[round][1].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points1.innerHTML = `${questions[round][1].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;
    case '2':
        if(points2.innerHTML != `${questions[round][2].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer2.innerHTML = `${questions[round][2].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points2.innerHTML = `${questions[round][2].points}`;
                rightNum.play();
                scoreRound += questions[round][2].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer2.innerHTML = `${questions[round][2].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points2.innerHTML = `${questions[round][2].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;
    case '3':
        if(points3.innerHTML != `${questions[round][3].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer3.innerHTML = `${questions[round][3].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points3.innerHTML = `${questions[round][3].points}`;
                rightNum.play();
                scoreRound += questions[round][3].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer3.innerHTML = `${questions[round][3].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points3.innerHTML = `${questions[round][3].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;
    case '4':
        if(points4.innerHTML != `${questions[round][4].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer4.innerHTML = `${questions[round][4].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points4.innerHTML = `${questions[round][4].points}`;
                rightNum.play();
                scoreRound += questions[round][4].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer4.innerHTML = `${questions[round][4].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points4.innerHTML = `${questions[round][4].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;        
    case '5':
        if(points5.innerHTML != `${questions[round][5].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer5.innerHTML = `${questions[round][5].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points5.innerHTML = `${questions[round][5].points}`;
                rightNum.play();
                scoreRound += questions[round][5].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer5.innerHTML = `${questions[round][5].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points5.innerHTML = `${questions[round][5].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;
    case '6':
        if(points6.innerHTML != `${questions[round][6].points}` && (crossTeamL.innerText.length != 3 || crossTeamR.innerText.length != 3)){
            answer6.innerHTML = `${questions[round][6].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points6.innerHTML = `${questions[round][6].points}`;
                rightNum.play();
                scoreRound += questions[round][6].points;
                currentRound.innerText = scoreRound;
                if(Number.isInteger(scoreRound/100)){
                finishRound();
                }   
            }, 1100); 
        } else {
            answer6.innerHTML = `${questions[round][6].answer}`;
            rightTxt.play();
            setTimeout(function(){
                points6.innerHTML = `${questions[round][6].points}`;
                rightNum.play(); 
            }, 1100);
        }
        break;
    case 'x':
        if (crossTeamR.innerText.length === 3 && crossTeamL.innerText.length === 3){
            break;
        } else if (turn === "right" && crossTeamL.innerText.length === 3) {
            failSound.play();
            crossTeamR.innerText = 'XXX';
            turn = "left";
            finishRound();
        } else if (turn === "left" && crossTeamR.innerText.length === 3) {
            failSound.play();
            crossTeamL.innerText = 'XXX';
            turn = "right";
            finishRound();
        } else if (turn === "left" && crossTeamL.innerText.length < 3){
            failSound.play();
            crossTeamL.innerText += 'X';
            if(crossTeamL.innerText.length === 3){
                rightArrow.innerHTML = `&#9679;`;
                leftArrow.innerHTML = `&#9676;`;
                turn = "right";
            }
        } else if (turn === "right" && crossTeamR.innerText.length < 3) {
            failSound.play();
            crossTeamR.innerText += 'X';
            if(crossTeamR.innerText.length === 3){
                leftArrow.innerHTML = `&#9679;`;
                rightArrow.innerHTML = `&#9676;`;
                turn = "left";
            }
        }
        break;
    case 'Enter':
        if(round < questions.length-1){
            round += 1;
            loadRound (round);
        } else {
            finalScore();
        }
        
    }
})


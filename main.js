let startArea = document.getElementById("start-area");
let startButton = document.getElementById("start-button");
let startAnswer = document.getElementById("stat-answer");

let nextButton = document.getElementById("next-button");

let gameAnswer = document.getElementById("game-answer");
let chanceAnswer = document.getElementById("chance-answer");
let gameArea = document.getElementById("game-area");
let gameButton = document.getElementById("game-button");

let historyArea = document.getElementById("history-area")

let resetButton = document.getElementById("rest-button");


let start = [];
let chance = 5;
let history =[];


startButton.addEventListener("click",game);
nextButton.addEventListener("click", hidden);
gameButton.addEventListener("click", gameStart);
resetButton.addEventListener("click",()=>{
    location.replace(location.href);
});

function game(){
    let startValue = startArea.value;
    start.push(startValue);

    if(startValue<1 || startValue>100){
        startAnswer.textContent = "1~100사이의 값을 입력하세요"
    }else {
        startAnswer.textContent = `${startValue}이 정답으로 입력 되었습니다.`
        startArea.hidden = true;
        startButton.hidden= true;
        nextButton.hidden = false;
    }
}

function hidden(){
    startButton.hidden = true;
    startAnswer.hidden = true;
    nextButton.hidden = true;

    gameAnswer.hidden = false;
    chanceAnswer.hidden = false;
    gameArea.hidden = false;
    gameButton.hidden = false;

}

function gameStart(){
    
    let rightAnswer =  gameArea.value;

    if(rightAnswer<1 || rightAnswer>100){
        gameAnswer.textContent = "1~100사이의 값을 입력하세요"
        return;
    }
    if(history.includes(rightAnswer)){
        gameAnswer.textContent = "취했니?? 이미 입력했었자나"
        return;
    }

    if(rightAnswer > start){
        gameAnswer.textContent = "Down!!"
        chance --;
    }else if (rightAnswer < start){
        gameAnswer.textContent = "UP!!"
        chance --; 
    }else {
        gameAnswer.textContent = "맞췄다! 니가 마셔!!"
        gameButton.disabled = true;
    }
    history.push(rightAnswer);
    console.log(start);
    console.log(history)
    chanceAnswer.textContent =`남은기회: ${chance}번`;
    historyArea.innerHTML = `입력한 숫자: ${history}`;

    if(chance<1){
        gameButton.disabled = true;
        gameAnswer.textContent = `정답은 ${start}였습니다.~~ 마셔라!`
    }
}


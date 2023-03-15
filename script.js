const messageEl=document.querySelector('.message');
const checkEl=document.querySelector('.check');
const guessEl=document.querySelector('.guess');
const numberEl=document.querySelector('.number');
const bodyEl=document.querySelector('body');
const highscoreEl=document.querySelector('.highscore');
const scoreEl=document.querySelector('.score');
const againEl=document.querySelector('.again');

let secretNumber=Math.trunc(Math.random()*2)+1;
let score=5;
let higscore=0;

function displayMessage(message){
 messageEl.textContent=message;
}

checkEl.addEventListener('click',()=>{
const guess=Number(guessEl.value)
if(!guess){
 displayMessage("⛔️ No number!");
}else if(guess===secretNumber){
 displayMessage("🎉 Correct Number!");
 numberEl.innerText=secretNumber;
 bodyEl.style.backgroundColor = "#60b347";
 numberEl.style.width='30rem'; 
 if(score>higscore){
  higscore=score;
  highscoreEl.textContent=higscore;
 }
}else if(guess!==secretNumber){
 if(score>1){
  displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
  score--;
  scoreEl.textContent=score;
 }else{
  displayMessage("💥 You lost the game!");
  scoreEl.textContent=0;
 }
}
});

againEl.addEventListener('click',()=>{
 score=5;
 secretNumber=secretNumber;
 displayMessage('Start guessing...');
 scoreEl.textContent=score;
 numberEl.textContent='?';
 guessEl.value='';
 bodyEl.style.backgroundColor='#222';
 numberEl.style.width = "15rem";
});

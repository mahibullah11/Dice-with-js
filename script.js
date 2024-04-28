function rollDice(){
    let scoreEle =  document.getElementById('score');
    let diceimg = document.getElementById('diceImg');
    let score = Math.ceil(Math.random() * 6);
    
    scoreEle.innerText = score;
  
    diceimg.src = `dice-${score}.png`;
}  
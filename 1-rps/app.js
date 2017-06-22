var score = {
    wins: 0,
    ties: 0,
    losses: 0
}
console.log(score)

function updateScoreboard(s) {
    document.querySelector("#score-wins").innerHTML = s.wins;
    document.querySelector("#score-ties").innerHTML = s.ties;
    document.querySelector("#score-losses").innerHTML = s.losses;
}

updateScoreboard(score);

var beats = {
    "rock":"scissors",
    "paper": "rock",
    "scissors":"paper"
}

function getComputerChoice(b) {
    var choices = Object.keys(b);
    var idx = Math.floor(Math.random()*choices.length);
    return choices[idx];
    
}

function playerChoice(c){
    var computerChoice = getComputerChoice(beats)
    if (beats[c]==computerChoice){
        score.wins ++;
    } else if (beats[computerChoice]==c){
        score.losses ++;
    } else {
        score.ties ++;
    }
    updateScoreboard(score);


}

document.querySelector("#btn-reset").addEventListener("click", function(){
    var reset = confirm("Are you sure dude?");
    if (reset == true){
        score.wins = 0;
        score.ties = 0;
        score.losses = 0;
        updateScoreboard(score);
    }
})

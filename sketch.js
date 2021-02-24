var canvas;

var gameState = 0;
var contestantCount;
var distance = 0;
var database;

var quiz, question, contestant;
var allContestants;


function setup(){
  canvas = createCanvas(1000,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(playerCount===4)
  {
    game.update(1)
  }

  if(gameState===1)
  {
    clear();
    game.play();
  }

}

  


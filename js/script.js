var player1 = "";
var player2 = "";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
    this.tempScore += this.roll;
  }
}


Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}


Player.prototype.winnerCheck = function() {
  if (this.totalScore >= 50) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function() {
    $('.clickable').click(function(){
    $('li').toggle();
    });

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $("#gameArea").show();
    $("#profile").hide();
    $(".jumbotron").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });
  $("button#new-game").click(function(event) {
    $("#gameArea").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $("#profile").show();
    $(".jumbotron").show();
  });

  $("button#player1-roll").click(function(event) {
    player1.roll = throwDice();
    $("#die-roll-1").text(player1.roll);
    player1.rollOne();
    $("#round-total-1").text(player1.tempScore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = throwDice();
    $("#die-roll-2").text(player2.roll);
    player2.rollOne();
    $("#round-total-2").text(player2.tempScore);
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalScore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});

//to check the clicked cases
let clicked = [];

//for the user's clicks
let user = {};

//for scoring
let scores = {};

//if someone wins or not
let hasWon = false;

//for testing the current player
let player = false;

//if the game started or not
let started = false;

//who should begin playing
let firstOne = player;

//who is the winner so he can start the next game as first player
let winner = "";

//declare default players as x & o
var player1 = "x";
var player2 = "o";

user[player1] = [];
scores[player1] = 0;

user[player2] = [];
scores[player2] = 0;

// checking if there is someone who won
checkCases = (playerToCheck, a, b, c) => {
  if (clicked.includes(a) && clicked.includes(b) && clicked.includes(c)) {
    if (
      user[playerToCheck].length >= 3 &&
      user[playerToCheck].includes(a) &&
      user[playerToCheck].includes(b) &&
      user[playerToCheck].includes(c)
    ) {
      scores[playerToCheck]++;
      document.getElementById("gamesScore").innerText =
        "Game's Score \n " +
        "  (" +
        player1 +
        ")   " +
        scores[player1] +
        " : " +
        scores[player2] +
        " (" +
        player2 +
        ")";
      document.getElementById("gamesScore").style.opacity = 1;
      alert("The Winner Is: Player " + playerToCheck.toUpperCase());
      hasWon = true;
      winner = playerToCheck;
      firstOne = winner;
      resetTry();
    }
  }
};

//checking if someone won
checkWinner = (playerToCheck) => {
  checkCases(playerToCheck, "11", "12", "13");
  checkCases(playerToCheck, "21", "22", "23");
  checkCases(playerToCheck, "31", "32", "33");
  checkCases(playerToCheck, "11", "21", "31");
  checkCases(playerToCheck, "12", "22", "32");
  checkCases(playerToCheck, "13", "23", "33");
  checkCases(playerToCheck, "11", "22", "33");
  checkCases(playerToCheck, "13", "22", "31");
  if (hasWon === false && clicked.length === 9) {
    document.getElementById("resultsMessage").style.opacity = 1;
    document.getElementById("resultsMessage").innerText =
      "Draw. Restart in 2 seconds.";
    setTimeout(() => {
      resetTry();
    }, 2000);
  }
};
//changing the case's background-image according to the player
fillCase = (element, validity) => {
  if (
    clicked.length < 9 &&
    !user[player1].includes(element.target.id) &&
    !user[player2].includes(element.target.id)
  ) {
    if (!validity) {
      document.getElementById(element.target.id).style.backgroundImage =
        "url('./images/X.png')";
      user[player1].push(element.target.id);
      document.getElementById("turn").innerText =
        "Player " + player2 + "'s turn";
      //this is for the rotation in the advanced but i didn't like it
      // document.getElementById("container").style.transform = "rotate(90deg)";
    } else {
      document.getElementById(element.target.id).style.backgroundImage =
        "url('./images/O.png')";
      user[player2].push(element.target.id);
      document.getElementById("turn").innerText =
        "Player " + player1 + "'s turn";
      //this is for the rotation in the advanced but i didn't like it
      // document.getElementById("container").style.transform = "rotate(180deg)";
    }
    document.getElementById(element.target.id).style.backgroundRepeat =
      "no-repeat";
    document.getElementById(element.target.id).style.backgroundSize = "cover";
    document.getElementById(element.target.id).style.backgroundColor =
      "transparent";
    clicked.push(element.target.id);
    player = !player;
  }
};

//handling the X/O pictures on the cases of the table
playCase = (element) => {
  fillCase(element, player);
  if (clicked.length > 0) {
    document.getElementById("resultsMessage").style.opacity = 0;
  }
  checkWinner(player1);
  checkWinner(player2);
};

// Adding click eventListener to all the cases of table
addingEvents = () => {
  var elements = document.getElementsByClassName("squares");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", playCase.bind(elements[i]));
    elements[i].addEventListener("mouseover", show);
    elements[i].addEventListener("mouseout", hide);
  }
};

//hide the marquee
hide = () => {
  document.getElementById("welcoming").style.opacity = 0;
};

//show the marquee
show = () => {
  document.getElementById("welcoming").style.opacity = 1;
};

resetTry = () => {
  if (started) {
    var elements = document.getElementsByClassName("squares");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundImage = "url('')";
    }
    document.getElementById("resultsMessage").style.opacity = 1;
    document.getElementById("resultsMessage").innerText = "Start Playing.";
    clicked = [];
    user[player1] = [];
    user[player2] = [];
    document.getElementById("turn").innerText = "Player " + winner + "'s turn";
    player = firstOne;
    hasWon = false;
    showPlayers();
  }
};

//start the Game
startGame = () => {
  if (!started) {
    document.getElementById("container").style.opacity = 1;
    started = !started;
    addingEvents();
    document.getElementById("resultsMessage").style.opacity = 1;
    document.getElementById("gamesScore").style.opacity = 1;
    document.getElementById("resultsMessage").innerText = "Now you can Start";
    document.getElementById("turn").innerText = "Player " + player1 + "'s turn";

    //permits Players to put in their names
    var player1Name = document.getElementById("player1Name").value;
    var player2Name = document.getElementById("player2Name").value;

    if (player1Name === player2Name && player1Name && player2Name) {
      player2Name = player2Name.toUpperCase();
    }
    if (player1Name || player2Name) {
      user = {};
      scores = {};
    }

    player1 = player1Name || "x";
    user[player1] = [];
    scores[player1] = 0;

    player2 = player2Name || "o";
    user[player2] = [];
    scores[player2] = 0;

    var checkbox1 = document.getElementById("player1Choice");
    var checkbox2 = document.getElementById("player2Choice");

    if (checkbox2.checked) {
      player = true;
    }
    firstOne = player;
    document.getElementById("player1Name").style.opacity = 0;
    document.getElementById("player2Name").style.opacity = 0;
    document.getElementById("choice").style.opacity = 0;
    document.getElementById("player1Choice").style.opacity = 0;
    document.getElementById("player2Choice").style.opacity = 0;
    document.getElementById("player1Label").style.opacity = 0;
    document.getElementById("player2Label").style.opacity = 0;
  } else {
    document.getElementById("resultsMessage").style.opacity = 1;
    document.getElementById("resultsMessage").innerText = "You already started";
  }
};

//reset the Score within the same game
resetScore = () => {
  if (started) {
    scores[player1] = 0;
    scores[player2] = 0;
    document.getElementById("gamesScore").innerText =
      "Game's Score \n " +
      "  (" +
      player1 +
      ")   " +
      scores[player1] +
      " : " +
      scores[player2] +
      " (" +
      player2 +
      ")";
    showPlayers();
  }
};

//showing the players's names and their scores
showPlayers = () => {
  document.getElementById("player1").innerText =
    "Player " + player1 + ": " + scores[player1] + " Wins.";
  document.getElementById("player2").innerText =
    "Player " + player2 + ": " + scores[player2] + " Wins.";
};

//restart the whole game and change players
restart = () => {
  window.location.reload();
};

//adding eventListeners
document.getElementById("other").addEventListener("mouseover", show);
document.getElementById("other").addEventListener("mouseout", hide);
document.getElementById("manipulation").addEventListener("mouseover", show);
document.getElementById("manipulation").addEventListener("mouseout", hide);
document.getElementById("reset").addEventListener("click", resetTry);
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("resetScore").addEventListener("click", resetScore);
document.getElementById("other").addEventListener("click", restart);

//initializing the score and hiding it
document.getElementById("gamesScore").innerText =
  "Game's Score \n " +
  "  (" +
  player1 +
  ")   " +
  scores[player1] +
  " : " +
  scores[player2] +
  " (" +
  player2 +
  ")";
document.getElementById("gamesScore").style.opacity = 0;

//invoking the function that shows players (line 218)
showPlayers();

import React from "react";
import $ from "jquery";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      filled: [],
      player: false,
      players: { 1: { Kills: 0, wins: 0 }, 2: { Kills: 0, wins: 0 } },
      started: false,
      right: ["15", "31", "47", "63"],
      left: ["0", "16", "32", "48"],
    };
  }
  checkWin() {
    if (this.state.players[1].kills === 24) {
      $("#errorMessage").text("Winner Is Player1");
      this.state.players[1].wins++;
      $("#scoreMessage").text(
        "Player(1)(wins): " +
          this.state.players[1].wins +
          " | Player(2)(wins): " +
          this.state.players[2].wins
      );
      this.state.players[1].kills = 0;
      this.state.players[2].kills = 0;
      $("#killMessage").text(
        "Player(1)(kills): " +
          this.state.players[1].Kills +
          " | Player(2)(kills): " +
          this.state.players[2].Kills
      );
    } else if (this.state.players[2].kills) {
      $("#errorMessage").text("Winner Is Player2");
      this.state.players[2].wins++;
      $("#scoreMessage").text(
        "Player(1)(wins): " +
          this.state.players[1].wins +
          " | Player(2)(wins): " +
          this.state.players[2].wins
      );
      this.state.players[1].kills = 0;
      this.state.players[2].kills = 0;
      $("#killMessage").text(
        "Player(1)(kills): " +
          this.state.players[1].Kills +
          " | Player(2)(kills): " +
          this.state.players[2].Kills
      );
    }
  }
  createTable = (nbRow, nbCol) => {
    let table = [];
    let color = true;
    for (let i = 0; i < nbRow; i++) {
      let children = [];
      for (let j = 0; j < nbCol; j++) {
        if (color) {
          children.push(
            <td
              className="black"
              id={this.state.counter++}
              key={j.toString()}
              onClick={this.moveCheck.bind(this)}
            ></td>
          );
          if (j === 7) {
            color = true;
          } else {
            color = !color;
          }
        } else if (!color) {
          children.push(
            <td
              className="white"
              id={this.state.counter++}
              key={j.toString()}
              onClick={this.moveCheck.bind(this)}
            ></td>
          );
          if (j === 7) {
            color = false;
          } else {
            color = !color;
          }
        }
      }
      table.push(
        <tbody key={i.toString()}>
          <tr className="rows" key={i.toString()}>
            {children}
          </tr>
        </tbody>
      );
    }
    return table;
  };
  fillCases() {
    if (!this.state.started) {
      $("#table").fadeIn(1000);
      $("#scoreTurn").fadeIn(1000);
      this.state.started = true;
      $("#errorMessage").text("");
      $("#killMessage").text(
        "Player(1)(kills): " +
          this.state.players[1].Kills +
          " | Player(2)(kills): " +
          this.state.players[2].Kills
      );
      if (!this.state.player) {
        $("#turns").text("First Player's Turn");
      }
      let elements = document.getElementsByClassName("black");
      for (let i = 0; i < elements.length; i++) {
        if (Number(elements[i].id) < 24) {
          elements[i].style.backgroundImage = "url('./brown.png')";
          elements[i].style.backgroundRepead = "no-repeat";
          elements[i].style.backgroundSize = "cover";
          this.state.filled.push(elements[i].id);
        } else if (Number(elements[i].id > 40)) {
          elements[i].style.backgroundImage = "url('./white.png')";
          elements[i].style.backgroundRepead = "no-repeat";
          elements[i].style.backgroundSize = "cover";
          this.state.filled.push(elements[i].id);
        }
      }
    }
  }
  reset() {
    if (this.state.started) {
      $("#table").fadeOut(1000);
      $("#scoreTurn").fadeOut(1000);
      let whiteElements = document.getElementsByClassName("white");
      let blackElements = document.getElementsByClassName("black");
      for (let i = 0; i < whiteElements.length; i++) {
        whiteElements[i].style.backgroundImage = "";
        blackElements[i].style.backgroundImage = "";
      }
      this.state = {
        counter: 0,
        filled: [],
        player: false,
        players: { 1: { Kills: 0 }, 2: { Kills: 0 } },
      };
      $("#errorMessage").text("Press Start Game to start Again!");
      $("#killMessage").text("");
      $("#turns").text("");
    } else {
      $("#errorMessage").text("Start The Game first then You Can Reset it!");
    }
  }
  moveCheck(e) {
    this.checkWin();
    $("#errorMessage").text("");
    if (this.state.filled.includes(e.target.id)) {
      if (
        !this.state.player &&
        e.target.style.backgroundImage === 'url("./white.png")'
      ) {
        let promptValue = prompt("Choose Either Left/Right");
        if (!promptValue) {
          while (!promptValue) {
            promptValue = prompt("Choose Either Left/Right");
          }
        }
        if (promptValue.toUpperCase() === "RIGHT") {
          let moveTo = document.getElementById(Number(e.target.id) - 7);
          if (
            (moveTo.style.backgroundImage === "" ||
              moveTo.style.backgroundImage === undefined) &&
            !this.state.right.includes(e.target.id)
          ) {
            this.state.filled[this.state.filled.indexOf(e.target.id)] = (
              Number(e.target.id) - 7
            ).toString();
            e.target.style.backgroundImage = "";
            moveTo.style.backgroundImage = "url('./white.png')";
            moveTo.style.backgroundRepead = "no-repeat";
            moveTo.style.backgroundSize = "cover";
            this.state.player = !this.state.player;
            $("#turns").text("Second Player's Turn");
          } else if (moveTo.style.backgroundImage === 'url("./brown.png")') {
            let toPlace = (Number(moveTo.id) - 7).toString();
            if (
              !document.getElementById(toPlace).style.backgroundImage ||
              document.getElementById(toPlace).style.backgroundImage === ""
            ) {
              this.state.filled[this.state.filled.indexOf(e.target.id)] = (
                Number(e.target.id) - 14
              ).toString();
              document.getElementById(toPlace).style.backgroundImage =
                "url('./white.png')";
              document.getElementById(toPlace).style.backgroundRepead =
                "no-repeat";
              document.getElementById(toPlace).style.backgroundSize = "cover";
              moveTo.style.backgroundImage = "";
              e.target.style.backgroundImage = "";
              this.state.player = !this.state.player;
              this.state.players[1].Kills++;
              $("#turns").text("Second Player's Turn");
              $("#killMessage").text(
                "Player(1)(kills): " +
                  this.state.players[1].Kills +
                  " | Player(2)(kills): " +
                  this.state.players[2].Kills
              );
            } else {
              $("#errorMessage").text("you can't go there. play Again!");
            }
          }
        } else if (promptValue.toUpperCase() === "LEFT") {
          let moveTo = document.getElementById(Number(e.target.id) - 9);
          if (
            (moveTo.style.backgroundImage === "" ||
              moveTo.style.backgroundImage === undefined) &&
            !this.state.left.includes(e.target.id)
          ) {
            this.state.filled[this.state.filled.indexOf(e.target.id)] = (
              Number(e.target.id) - 9
            ).toString();

            e.target.style.backgroundImage = "";
            moveTo.style.backgroundImage = "url('./white.png')";
            moveTo.style.backgroundRepead = "no-repeat";
            moveTo.style.backgroundSize = "cover";
            this.state.player = !this.state.player;
            $("#turns").text("Second Player's Turn");
          } else if (moveTo.style.backgroundImage === 'url("./brown.png")') {
            let toPlace = (Number(moveTo.id) - 9).toString();
            if (
              !document.getElementById(toPlace).style.backgroundImage ||
              document.getElementById(toPlace).style.backgroundImage === ""
            ) {
              this.state.filled[this.state.filled.indexOf(e.target.id)] = (
                Number(e.target.id) - 18
              ).toString();
              document.getElementById(toPlace).style.backgroundImage =
                "url('./white.png')";
              document.getElementById(toPlace).style.backgroundRepead =
                "no-repeat";
              document.getElementById(toPlace).style.backgroundSize = "cover";
              moveTo.style.backgroundImage = "";
              e.target.style.backgroundImage = "";
              this.state.player = !this.state.player;
              this.state.players[1].Kills++;
              $("#turns").text("Second Player's Turn");
              $("#killMessage").text(
                "Player(1)(kills): " +
                  this.state.players[1].Kills +
                  " | Player(2)(kills): " +
                  this.state.players[2].Kills
              );
            } else {
              $("#errorMessage").text("you can't go there. play Again!");
            }
          }
        } else {
          $("#errorMessage").text("Either type Left, or Right! Play Again!");
        }
      } else if (
        this.state.player &&
        e.target.style.backgroundImage === 'url("./brown.png")'
      ) {
        let promptValue = prompt("Choose Either Left/Right");
        if (!promptValue) {
          while (!promptValue) {
            promptValue = prompt("Choose Either Left/Right");
          }
        }
        if (promptValue.toUpperCase() === "RIGHT") {
          let moveTo = document.getElementById(Number(e.target.id) + 9);
          if (
            (moveTo.style.backgroundImage === "" ||
              moveTo.style.backgroundImage === undefined) &&
            !this.state.right.includes(e.target.id)
          ) {
            this.state.filled[this.state.filled.indexOf(e.target.id)] = (
              Number(e.target.id) + 9
            ).toString();
            e.target.style.backgroundImage = "";
            moveTo.style.backgroundImage = "url('./brown.png')";
            moveTo.style.backgroundRepead = "no-repeat";
            moveTo.style.backgroundSize = "cover";
            this.state.player = !this.state.player;
            $("#turns").text("First Player's Turn");
          } else if (moveTo.style.backgroundImage === 'url("./white.png")') {
            let toPlace = (Number(moveTo.id) + 9).toString();
            if (
              !document.getElementById(toPlace).style.backgroundImage ||
              document.getElementById(toPlace).style.backgroundImage === ""
            ) {
              this.state.filled[this.state.filled.indexOf(e.target.id)] = (
                Number(e.target.id) + 18
              ).toString();
              document.getElementById(toPlace).style.backgroundImage =
                "url('./brown.png')";
              document.getElementById(toPlace).style.backgroundRepead =
                "no-repeat";
              document.getElementById(toPlace).style.backgroundSize = "cover";
              moveTo.style.backgroundImage = "";
              e.target.style.backgroundImage = "";
              this.state.player = !this.state.player;
              this.state.players[2].Kills++;
              $("#turns").text("First Player's Turn");
              $("#killMessage").text(
                "Player(1)(kills): " +
                  this.state.players[1].Kills +
                  " | Player(2)(kills): " +
                  this.state.players[2].Kills
              );
            } else {
              $("#errorMessage").text("you can't go there. play Again!");
            }
          }
        } else if (promptValue.toUpperCase() === "LEFT") {
          let moveTo = document.getElementById(Number(e.target.id) + 7);
          if (
            (moveTo.style.backgroundImage === "" ||
              moveTo.style.backgroundImage === undefined) &&
            !this.state.left.includes(e.target.id)
          ) {
            this.state.filled[this.state.filled.indexOf(e.target.id)] = (
              Number(e.target.id) + 7
            ).toString();
            e.target.style.backgroundImage = "";
            moveTo.style.backgroundImage = "url('./brown.png')";
            moveTo.style.backgroundRepead = "no-repeat";
            moveTo.style.backgroundSize = "cover";
            this.state.player = !this.state.player;
            $("#turns").text("First Player's Turn");
          } else if (moveTo.style.backgroundImage === 'url("./white.png")') {
            let toPlace = (Number(moveTo.id) + 7).toString();
            if (
              !document.getElementById(toPlace).style.backgroundImage ||
              document.getElementById(toPlace).style.backgroundImage === ""
            ) {
              this.state.filled[this.state.filled.indexOf(e.target.id)] = (
                Number(e.target.id) + 14
              ).toString();
              document.getElementById(toPlace).style.backgroundImage =
                "url('./brown.png')";
              document.getElementById(toPlace).style.backgroundRepead =
                "no-repeat";
              document.getElementById(toPlace).style.backgroundSize = "cover";
              moveTo.style.backgroundImage = "";
              e.target.style.backgroundImage = "";
              this.state.player = !this.state.player;
              this.state.players[2].Kills++;
              $("#turns").text("First Player's Turn");
              $("#killMessage").text(
                "Player(1)(kills): " +
                  this.state.players[1].Kills +
                  " | Player(2)(kills): " +
                  this.state.players[2].Kills
              );
            } else {
              $("#errorMessage").text("you can't go there. play Again!");
            }
          }
        } else {
          $("#errorMessage").text("Either type Left, or Right! Play Again!");
        }
      }
    }
  }
  hideEverything() {
    $("#table").hide();
    $("#scoreTurn").hide();
    $("#errorMessage").text("Press Start Game to Start!");
  }
  componentDidMount() {
    this.hideEverything();
  }
  render() {
    return (
      <div id="game">
        <div id="title">
          <p id="titleMessage">Welcome to Checkers Game</p>
          <input
            onClick={this.fillCases.bind(this)}
            type="button"
            value="Start Game"
            id="start"
          ></input>
          <input
            onClick={this.reset.bind(this)}
            type="button"
            value="Reset Game"
            id="reset"
          ></input>
        </div>
        <div id="scoreTurn">
          <p id="turns"></p>
          <p id="killMessage"></p>
          <p id="scoreMessage"></p>
        </div>
        <table id="table">{this.createTable(8, 8)}</table>
        <div id="errors">
          <p id="errorMessage"></p>
        </div>
      </div>
    );
  }
}
export default Game;
// if (this.state.started) {
//   if (
//     !this.state.filled.includes(e.target.id) &&
//     !this.state.player &&
//     e.target.className !== "white"
//   ) {
//     e.target.style.backgroundImage = "url('./white.png')";
//     e.target.style.backgroundRepead = "no-repeat";
//     e.target.style.backgroundSize = "cover";
//     this.state.filled.push(e.target.id);
//     this.state.player = !this.state.player;
//   } else if (
//     !this.state.filled.includes(e.target.id) &&
//     this.state.player &&
//     e.target.className !== "white"
//   ) {
//     e.target.style.backgroundImage = "url('./brown.png')";
//     e.target.style.backgroundRepead = "no-repeat";
//     e.target.style.backgroundSize = "cover";
//     this.state.filled.push(e.target.id);
//     this.state.player = !this.state.player;
//   }
// }

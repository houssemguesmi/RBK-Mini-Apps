import React from "react";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      player: true,
      players: { 1: [], 2: [] },
      colored: [],
      firstCol: ["0", "7", "14", "21", "28", "35"],
      secondCol: ["1", "8", "15", "22", "29", "36"],
      thirdCol: ["2", "9", "16", "23", "30", "37"],
      forthCol: ["3", "10", "17", "24", "31", "38"],
      fifthCol: ["4", "11", "18", "25", "32", "39"],
      sixthCol: ["5", "12", "19", "26", "33", "40"],
      seventhCol: ["6", "13", "20", "27", "34", "41"],
    };
  }
  checkWinner() {}
  checkCol(e, colToCheck) {
    if (this.state[colToCheck].includes(e.target.id)) {
      for (let i = this.state[colToCheck].length - 1; i >= 0; i--) {
        if (!this.state.colored.includes(this.state[colToCheck][i])) {
          if (this.state.player) {
            document.getElementById(
              this.state[colToCheck][i]
            ).style.backgroundColor = "red";
            this.state.player = false;
            this.state.players[1].push(this.state[colToCheck][i]);
            this.state.colored.push(this.state[colToCheck][i]);
            console.log("1", this.state[colToCheck][i], this.state.players[1]);
            return;
          } else {
            document.getElementById(
              this.state[colToCheck][i]
            ).style.backgroundColor = "yellow";
            this.state.player = true;
            this.state.players[2].push(this.state[colToCheck][i]);
            this.state.colored.push(this.state[colToCheck][i]);
            console.log("2", this.state[colToCheck][i], this.state.players[2]);
            return;
          }
        }
      }
    }
  }
  fill(e) {
    this.checkCol(e, "firstCol");
    this.checkCol(e, "secondCol");
    this.checkCol(e, "thirdCol");
    this.checkCol(e, "forthCol");
    this.checkCol(e, "fifthCol");
    this.checkCol(e, "sixthCol");
    this.checkCol(e, "seventhCol");
  }
  createTable = (nbRow, nbCol) => {
    let table = [];
    for (let i = 0; i < nbRow; i++) {
      let children = [];
      for (let j = 0; j < nbCol; j++) {
        children.push(
          <td
            className="cases"
            id={this.state.counter++}
            key={j.toString()}
            onClick={this.fill.bind(this)}
          ></td>
        );
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
  render() {
    return (
      <div id="game">
        <table>{this.createTable(6, 7)}</table>
      </div>
    );
  }
}
export default Game;

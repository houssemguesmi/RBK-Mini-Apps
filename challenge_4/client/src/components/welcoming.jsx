import React from "react";
import ReactDOM from "react-dom";
import Game from "./game.jsx";
class Welcoming extends React.Component {
  constructor(props) {
    super(props);
  }
  startGame() {
    ReactDOM.render(<Game />, document.getElementById("app"));
  }
  render() {
    return (
      <div id="welcoming">
        <p id="welcomeMessage">Hey, Press Start Game to play!</p>
        <input
          type="button"
          id="startGame"
          value="Start Game"
          onClick={this.startGame}
        ></input>
      </div>
    );
  }
}
export default Welcoming;

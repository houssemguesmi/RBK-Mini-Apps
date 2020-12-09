// Changing the case's background image
let clicked = [];
let user = {
  x: [],
  y: [],
};
let player = false;
checkWinner = () => {
  console.log("i'm checking");
  if (
    clicked.includes("11") &&
    clicked.includes("12") &&
    clicked.includes("13")
  ) {
    if (user.x) {
    }
  }
};
playCase = (element) => {
  if (
    clicked.length < 9 &&
    !user.x.includes(element.target.id) &&
    !user.y.includes(element.target.id)
  ) {
    if (!player) {
      document.getElementById(element.target.id).style.backgroundColor = "blue";
      clicked.push(element.target.id);
      user.x.push(element.target.id);
      player = true;
    } else {
      document.getElementById(element.target.id).style.backgroundColor =
        "yellow";
      clicked.push(element.target.id);
      user.y.push(element.target.id);
      player = false;
    }
  }
  checkWinner();
};

// Adding click eventListener to all the cases of table
var elements = document.getElementsByClassName("squares");
adding = () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", playCase.bind(elements[i]));
  }
};

adding();

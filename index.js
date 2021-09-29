const selectBox = document.querySelector(".select-box");
selectXBtn = selectBox.querySelector(".playerX");
selectOBtn = selectBox.querySelector(".playerO");
playboard = document.querySelector(".playboard");
allBox = document.querySelectorAll("section span");
players = document.querySelectorAll(".players");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  selectXBtn.onclick = () => {
    selectBox.classList.add("hide");
    playboard.classList.add("show");
  };
  selectOBtn.onclick = () => {
    selectBox.classList.add("hide");
    playboard.classList.add("show");
    players.setAttribute("class", "players active");
  };
};

let playerXIcon = "X";
let playerOIcon = "O";

function clickedBox(element) {
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="${playerOIcon}"></i>`;
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
  }
}

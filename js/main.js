import Game from "./Game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

// showing winner and start game landing page actions
const startGame = document.querySelector("#start");
const img = document.querySelector(".img");
let rest = document.querySelector("#restart");
const gameBox = document.querySelector(".right");


startGame.addEventListener('click', () =>{
  gameBox.style.display = "block";
  rest.style.display = "flex";
  img.style.display = "none";
  startGame.style.display = "none";

});

document.querySelector("#restart").addEventListener("click", () => {    
      onRestartClick();
});
document.querySelector("#newgame").addEventListener("click", () => {    
      onRestartClick();
});

document.querySelectorAll(".board-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.update(game);
}

function onRestartClick() {
    game = new Game();
    gameView.update(game)
}

gameView.update(game)

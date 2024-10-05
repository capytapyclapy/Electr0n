function launchGame() {
  const gameWindow = window.open('about:blank', '_blank');
  gameWindow.document.write('<iframe src="game.html" frameborder="0" width="100%" height="100%"></iframe>');
}

// script.js
const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const gameName = event.target.dataset.game;
    const gameWindow = window.open('about:blank', '_blank');
    gameWindow.document.write(`<iframe src="${gameName}.html" frameborder="0" width="100%" height="100%"></iframe>`);
  });
});
 

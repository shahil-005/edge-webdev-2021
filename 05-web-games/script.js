let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');

let enemy = {
  color: 'red',
  x: 100,
  y: 0,
  h: 50,
  w: 50,
  vx: 0,
  vy: 1
}

let player = {
  color: 'blue',
  x: 0,
  y: 175,
  h: 50,
  w: 50,
  vx: 1,
  vy: 0
}

function drawBox(box) {
  context.fillStyle = box.color;
  context.fillRect(box.x, box.y, box.w, box.h);
}

function updateGameState() {
  enemy.y += enemy.vy;
  if (enemy.y + enemy.h > gamebox.height) {
    enemy.vy = -1;
  } else if (enemy.y < 0) {
    enemy.vy = 1;
  }
  
}

function updateGame() {
  // update game state 
  updateGameState();

  // clear the canvas
  context.clearRect(0, 0, gamebox.width, gamebox.height);
  // draw the player
  drawBox(player);
  // draw the enemy
  drawBox(enemy);

  window.requestAnimationFrame(updateGame);
}

updateGame();
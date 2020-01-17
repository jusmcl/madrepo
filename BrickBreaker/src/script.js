import Paddle from 'paddle.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 800;



ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
ctx.fillStyle = 'black';


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
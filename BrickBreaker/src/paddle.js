export default class Paddle {

    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.width = 30;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.gameHeight - 10
        };
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, this.width, this.gameHeight);
    }
}s
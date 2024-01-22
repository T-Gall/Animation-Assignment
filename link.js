class Link {
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./croppedLink2.png"), 1.5, 0, 32, 68, 8, .2);

        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}
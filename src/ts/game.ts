//USE Web font
/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />
declare function require(x: string): any;
var globalPhaser = require('phaser');

class SimpleGame {
    title:Phaser.Text;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
       //this.game.load.image('logo', 'assets/images/phaser2.png');
    }

    create() {
        //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
        this.title = this.game.add.text(100,100,"Forlorn Dungeon!!",{font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"});
    }

}

window.onload = () => {

    var game = new SimpleGame();
};
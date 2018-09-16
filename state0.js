/* global
    game, Phaser
*/

var state0 = {};

state0.preload = function () {
    game.load.spritesheet('dude', 'assets/spritesheets/dude.png', 32, 48);
    game.load.tilemap('map0', 'assets/tilemaps/map0.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tilemaps/simples_pimples.png');
}

// assign physics variables
var speed = 300;
var gravity = 1000;
var jumpHeight = -450;
var player;
var platforms;

// assign control variables
var cursors;
var jumpButton;

state0.create = function () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    var map = game.add.tilemap('map0');
    map.addTilesetImage('blocks', 'tiles');
    
    var background = map.createLayer('background');
    platforms = map.createLayer('platforms');
    
    //background.resizeWorld();
    
    map.setCollisionBetween(1, 1000, true, 'platforms');
    
    createPlayer();
    
}

state0.update = function () {
    if (player.x > game.world.width)
    {
        playerGlobals.lastY = player.body.y;
        playerGlobals.lastX = 16;
        playerGlobals.xVel = player.body.velocity.x;
        playerGlobals.yVel = player.body.velocity.y;
        playerGlobals.xDir = cursors.right.isDown - cursors.left.isDown;
        game.state.start('state1');
    }
}

state0.render = function() {
    //game.debug.body(player);
}
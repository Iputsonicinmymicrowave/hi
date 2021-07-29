namespace SpriteKind {
    export const Block = SpriteKind.create()
}
let Tile: Sprite = null
let X = 0
let Paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
Paddle.setPosition(80, 100)
Paddle.setStayInScreen(true)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f . . . . . 
    . . . . . . . f f . f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f . . f f f f . . 
    . . . . f f f f . . f f . f . . 
    . . . f f . f f . . f . . f . . 
    . . . f . . . f . . f . . f . . 
    . . . f . . f f f f f . . f . . 
    . . . f f f f . . f f . f f . . 
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, Paddle, 50, -81)
projectile.setBounceOnWall(true)
let Index_2 = 0
for (let Index_22 = 0; Index_22 <= 2; Index_22++) {
    for (let index = 0; index <= 9; index++) {
        X = index * 18
        Tile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 . . . . . . 2 . . . . 
            . . . . 2 . . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . 2 . . . . 2 2 . . . . 
            . . . . . 2 2 2 2 . 2 . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Block)
        Tile.setPosition(X, Index_22 * (18 + 10))
    }
}

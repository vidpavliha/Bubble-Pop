controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
info.onScore(100, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(assets.image`p1`, SpriteKind.Player)
mySprite.top = 102
music.play(music.createSong(hex`0096000408080106001c00010a006400f401640000040000000000000000000000000000000002d80000000200011608000a00011110001200011618001a00011120002200011628002a00011130003200011638003a00011140004200011848004a00011150005200011858005a00011160006200011868006a00011170007200011878007a00011180008200011288008a00010d90009200011298009a00010da000a2000112a800aa00010db000b2000112b800ba00010dc000c2000118c400c6000118cc00ce000118d000d2000118d800da00011ddc00de00011de400e600011de800ea00011df000f2000120f400f6000120f800fa000120fc00fe000120`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(0)

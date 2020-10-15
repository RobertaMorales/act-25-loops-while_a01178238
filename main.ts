input.onPinPressed(TouchPin.P0, function () {
    X = 4
    Y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        basic.pause(200)
        X += -1
        Y += 1
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    COUNTER = 5
    while (COUNTER >= 0) {
        basic.showNumber(COUNTER)
        COUNTER += -1
    }
    music.playMelody("C D C D B C5 B C5 ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let COUNTER = 0
let Y = 0
let X = 0
let SPRITE = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        SPRITE.move(2)
        basic.pause(100)
        SPRITE.turn(Direction.Left, 90)
        basic.pause(100)
    }
})

basic.forever(function () {
    basic.clearScreen()
    if (input.lightLevel() < 30) {
        basic.showIcon(IconNames.Skull)
        soundExpression.sad.playUntilDone()
    } else if (input.lightLevel() < 120) {
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
    } else if (input.lightLevel() < 50) {
        led.plot(2, 0)
        led.plot(2, 1)
    } else if (input.lightLevel() < 70) {
        led.plot(2, 0)
    } else if (input.lightLevel() < 210) {
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
    } else {
    	
    }
})

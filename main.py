def on_forever():
    basic.clear_screen()
    if input.light_level() < 30:
        basic.show_icon(IconNames.SKULL)
        soundExpression.sad.play_until_done()
    elif input.light_level() < 120:
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
    elif input.light_level() < 110:
        led.plot(2, 0)
        led.plot(2, 1)
    elif input.light_level() < 100:
            led.plot(2, 0)
basic.forever(on_forever)

let AB = 0
let num = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Nicknack 22")
})
input.onGesture(Gesture.LogoUp, function () {
    AB = randint(0, 3249)
    AB += 1
    basic.showNumber(AB)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    num = 4
})

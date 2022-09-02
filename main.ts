input.onButtonPressed(Button.A, function () {
    factor_1 = randint(0, 20)
    factor2 = randint(0, 20)
    basic.showNumber(factor_1)
    basic.pause(500)
    basic.showString("x")
    basic.showNumber(factor2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(factor_1 * factor2)
    basic.pause(500)
    basic.clearScreen()
})
let factor2 = 0
let factor_1 = 0
basic.showString("tabla de multiplicación.")
basic.clearScreen()

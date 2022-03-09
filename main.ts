input.onButtonPressed(Button.A, function () {
    Coin_1 = randint(0, 1)
    if (Coin_1 == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Coin2 = randint(0, 1)
    if (Coin2 == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
    if (Coin2 == Coin_1) {
        Player_1 += 1
        basic.showString("P1")
        basic.showString("" + (Player_1))
        basic.clearScreen()
    } else {
        Player_2 += 1
        basic.showString("P2")
        basic.showString("" + (Player_2))
        basic.clearScreen()
    }
})
let Coin_1 = 0
let Player_2 = 0
let Player_1 = 0
let Coin2 = 0
Coin2 = 0
Coin2 = 0
Player_1 = 0
Player_2 = 0
basic.forever(function () {
	
})

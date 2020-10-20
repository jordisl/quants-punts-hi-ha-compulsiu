input.onButtonPressed(Button.A, function () {
    if (punts == 1) {
        narcador = narcador + 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (punts == 3) {
        narcador = narcador + 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (punts == 2) {
        narcador = narcador + 1
    }
})
function triaimostrapunts () {
    punts = randint(1, 3)
    for (let index = 0; index < punts; index++) {
        led.plot(randint(0, 4), randint(0, 4))
    }
}
let punts = 0
let narcador = 0
narcador = 0
narcador = 0
for (let index = 0; index < 20; index++) {
    triaimostrapunts()
    basic.pause(500)
    basic.clearScreen()
}
basic.showString("" + (narcador))
basic.forever(function () {
	
})

let punts = 0
let marcador = 0
input.onButtonPressed(Button.A, function () {
    if (punts == 1) {
        marcador = marcador + 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (punts == 3) {
        marcador = marcador + 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (punts == 2) {
        marcador = marcador + 1
    }
})
input.onGesture(Gesture.Shake, function () {
    marcador = 0
    marcador = 0
    for (let index = 0; index < 20; index++) {
        triaimostrapunts()
        basic.pause(500)
        basic.clearScreen()
    }
    basic.showString("" + (marcador))
})
function triaimostrapunts () {
    punts = randint(1, 3)
    for (let index = 0; index < punts; index++) {
        led.plot(randint(0, 4), randint(0, 4))
    }
}
basic.forever(function () {
	
})

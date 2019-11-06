let moistureLevel: number = 0;

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    moistureLevel = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)

    basic.showNumber(moistureLevel);
    basic.pause(200);
    basic.clearScreen();
    basic.pause(300);
    basic.clearScreen();
})

input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    if (pins.digitalWritePin(DigitalPin.P16, 1)) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})

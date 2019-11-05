led.enable(true)
let going: boolean = false
pins.analogWritePin(AnalogPin.P8, 1023);
pins.analogWritePin(AnalogPin.P12, 1023);
pins.analogWritePin(AnalogPin.P14, 1023);

basic.forever(() => {
    let going = true
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P14, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P14, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P14, 0)
        }
        control.waitMicros(1000)

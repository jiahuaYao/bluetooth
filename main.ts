bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    while (count == 0) {
        bluetooth.uartWriteNumber(baby)
        baby += 1000
    }
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.B, function () {
    count = 1
})
let baby = 0
let count = 0
bluetooth.startUartService()
count = 0
basic.showLeds(`
    # . # . .
    # . # # .
    # # # . #
    . . # # #
    . . # . #
    `)

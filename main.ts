bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Sword)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString(String.fromCharCode(count))
    count = count + 1000
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Pitchfork)
})
let count = 0
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
	
})

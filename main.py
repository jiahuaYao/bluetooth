def on_bluetooth_connected():
    basic.show_icon(IconNames.YES)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.NO)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    global baby
    while count == 0:
        bluetooth.uart_write_number(baby)
        baby += 1000
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_uart_data_received():
    basic.show_icon(IconNames.PITCHFORK)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

def on_button_pressed_b():
    global count
    count = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

baby = 0
count = 0
bluetooth.start_uart_service()
count = 0
basic.show_leds("""
    # . # . .
        # . # # .
        # # # . #
        . . # # #
        . . # . #
""")
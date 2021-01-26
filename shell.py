def find_the_ball(start, swaps):
    position = start
    for (a, b) in swaps:
        if a == position:
            position = b
        elif b == position:
            position = a
    return position
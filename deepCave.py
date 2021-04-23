############################# ########################################
""" DeepCave, inspired by Al Sweigart, al@inventwithpython.com
An animation of a deep cave that goes forever into the earth"""

import random, sys, time

# set up the constants
WIDTH = 70
PAUSE_AMOUNT = 0.05

print('Deep Cave')
print('Press Ctrl-C to stop.')
time.sleep(2)

leftWidth = 20
gapWidth = 10

while True:
    # Display the tunnel segment.
    rightWidth = WIDTH - gapWidth - leftWidth
    print(('#' * leftWidth) + (' ' * gapWidth) + ('#' * rightWidth))

    #check for Ctrl_C press during the brief pause
    try:
        time.sleep(PAUSE_AMOUNT)
    except KeyboardInterrupt:
        sys.exit()  # when ctrl-c is pressed, end the program

    # adjust the left side width
    diceRoll = random.randint(1,6)
    if diceRoll == 1 and leftWidth > 1:
        leftWidth = leftWidth - 1 # Decrease the left side width
    elif diceRoll == 2 and leftWidth + gapWidth < WIDTH - 1:
        leftWidth = leftWidth + 1 # increase left side width
    else:
        pass # do nothing no change in left side width

    # Adjust the gap width
    diceRoll = random.randint(1, 6)
    if diceRoll  == 1 and gapWidth > 1:
        gapWidth = gapWidth - 1 # decrease the gap
    elif diceRoll == 2 and leftWidth + gapWidth < WIDTH - 1:
        gapWidth = gapWidth + 1 # increase gap width
    else:
        pass
    

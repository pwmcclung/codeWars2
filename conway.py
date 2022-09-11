'''Conway\'s Game of Life, inspired by Al Sweigart, al@inventwithpython.com
The classic cellular automata simulation. Press Ctrl-C to stop.
More info at https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'''

import copy, random, sys, time

# set up the constants
WIDTH = 79 # the width of the cell grid
HEIGHT = 20 # the height of the cell grid

# (!) try changing ALIVE  to '#' or another character
ALIVE = '0'  # The character representing aliving cell
# (!) Try changing DEAD to '.' or another character
DEAD = ' ' # The character representing a dead cell

# (!) Try changing ALIVE to '|' and DEAD to '-'.
# The cells and nextCells are dictionaries for the state of the game.
# Their keys are (x,y) tuples and their values are one of the ALIVE or DEAD Values
nextCells = {}
# Put random dead and alive cells into nextCells
for x in range(WIDTH): # Loop over every possible column
    for y in range(HEIGHT): # Loop over every possible row
        #50/50 chance for starting cells to be alive or dead
        if random.randint(0,1)  == 0:
            nextCells[(x,y)] = ALIVE  # Adding a living cell
        else:
            nextCells[(x,y)] = DEAD  # adding a dead cell

while True: # Main program loop
    # Each iteration  of this loop is a step of the simulation

    print('\n' * 50) # Separate each step wiht newlines.
    cells = copy.deepcopy(nextCells)

    # Print cells on the screen
    for y in range(HEIGHT):
        for x in range(WIDTH):
            print(cells[(x,y)], end='')  # Print the # or space
        print()  #Print a newline at the end of the row
    print('Press Ctrl-C to quit.')

    # Calculate the next step's cells based on current step's cells:
    for x in range(WIDTH):
        for y in range(HEIGHT):
            # Get the neighboring coordinates of (x, y) even if they wrap around the edge
            left = (x-1) % WIDTH
            right = (x + 1) % WIDTH
            above = (y - 1) % HEIGHT
            below = (y + 1) % HEIGHT

            # Count the number of living neighbors
            numNeighbors = 0
            if cells[(left, above)] == ALIVE:
                numNeighbors += 1 # top-left neighbor is alive
            if cells[(x, above)] == ALIVE:
                numNeighbors += 1 # Top neighbor is alive
            if cells[(right, above)] == ALIVE: # top-right neighbor is alive
                numNeighbors += 1
            if cells[(left, y)] == ALIVE: # Left neighbor is alive
                numNeighbors += 1
            if cells[(right, y)] == ALIVE: # Right neighbor is alive
                numNeighbors += 1
            if cells[(left,below)] == ALIVE: # Bottom left neighbor is alive
                numNeighbors += 1
            if cells[(x, below)] == ALIVE: # bottom neighbor is alive
                numNeighbors += 1
            if cells[(right, below)]  == ALIVE: # bottom right neighbor is alive
                numNeighbors += 1

            # Set cell based on Conway's Game of Life rules:
            if cells[(x,y)] == ALIVE and (numNeighbors == 2 or numNeighbors == 3):
                # living cells with 2 or 3 neighbors stay alive
                nextCells[(x, y)] = ALIVE
            elif cells[(x,y)] == DEAD and numNeighbors ==3:
                # Dead cells with 3 neighbors come alive
                nextCells[(x,y)] = ALIVE
            else:
                # everything else dies or stay dead
                nextCells[(x,y)] = DEAD
    try:
        time.sleep(1)  # adds a 1 second pause to reduce flickering
    except KeyboardInterrupt:
        print('Conway\'s Game of Life')
        sys.exit()  # when ctrl-c is pressed, end the game

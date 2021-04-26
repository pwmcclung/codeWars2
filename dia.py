'''Diamonds, inspired by Al Sweigart. al@inventwithpython.com
Draws diamonds of various sizes.'''

def main():
    print('Diamonds')

    # display diamonds of sizes 0 through 6
    for diamondSize in range(0, 10):
        displayOutlineDiamond(diamondSize)
        print() # Prints a newline.
        displayFilledDiamond(diamondSize)
        print() # prints a newline

def displayOutlineDiamond(size):
    #display the top half of the diamond
    for i in range(size):
        print(' ' * (size - i - 1), end='') # left side space
        print('/', end='')  # left side of diamond.
        print(' ' * (i * 2), end='') # interior of the diamond
        print('\\') # right side of the diamond

    # Display the bottom half of the diamond
    for i in range(size):
        print(' ' * i, end='') #left side space
        print('\\', end='') # Left side of diamond
        print(' ' * ((size - i - 1) * 2), end='')  # Interior of diamond
        print('/')  #Right side of diamond


def displayFilledDiamond(size):
    # display the top half of the diamond
    for i in range(size):
        print(' ' * (size - i - 1), end='') # left side space
        print('/' * (i+ 1), end='')  # left half of diamond
        print('\\' * (i + 1)) # right half of the diamond

    # Display the bottom half of the diamond
    for i in range(size):
        print(' ' * i, end='') # Left side space
        print('\\' * (size - i), end='') # left sife of diamond
        print('/' * (size - i)) # right side of diamond

# if this program is run instead of imported
if __name__ == '__main__':
    main()




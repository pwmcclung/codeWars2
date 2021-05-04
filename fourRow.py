"""Four in a Row, inspired by Al Sweigart, al@inventwithpython.com

A tile-dropping game to get four in a row, similar to connect four."""

import sys

# constants used for  displaying the board
EMPTY_SPACE = '.'  # a period is easier to count than a space
PLAYER_X = 'X'
PLAYER_O = 'O'

# Note: Update displayBoard() & COLUMN_LABELS if BOARD_WIDTH is changed.
BOARD_WIDTH = 7
BOARD_HEIGHT = 6
COLUMN_LABELS = ('1', '2', '3', '4', '5', '6', '7')
assert len(COLUMN_LABELS) == BOARD_WIDTH


def main():
    print("""Four in a Row.

Two Players take turns dropping tiles into one of seven columns, trying to 
make four in a row horizontally, vertically, or diagonally.
""")
    # set up a new game
    gameBoard = getNewBoard()
    playerTurn = PLAYER_X

    while True:  # Run a player's turn .
        # display the board and get player's move:
        displayBoard(gameBoard)
        playerMove = askForPlayerMove(playerTurn, gameBoard)
        gameBoard[playerMove] = playerTurn

        # Check for win or for tie
        if isWinner(playerTurn, gameBoard):
            displayBoard(gameBoard)  # Display the board one last time
            print('Player ' + playerTurn + ' has won!')
            sys.exit()
        elif isFull(gameBoard):
            displayBoard(gameBoard)  # Display the board one last time
            print('There is a tie!')
            sys.exit()

        # switch turns to the other player:
        if playerTurn == PLAYER_X:
            playerTurn = PLAYER_O
        elif playerTurn == PLAYER_O:
            playerTurn = PLAYER_X


def getNewBoard():
    """Returns a dictionary that reporesents a Four in a Row board.

    The keys are (columnIndex, rowIndex) tuples of two integers, and the values
    are one of the 'X', 'O' or '.' (empty space) strings."""
    board = {}
    for columnIndex in range(BOARD_WIDTH):
        for rowIndex in range(BOARD_HEIGHT):
            board[(columnIndex, rowIndex)] = EMPTY_SPACE
    return board


def displayBoard(board):
    """Display the board and its tiles on the screen."""

    '''Prepare a list to pass to the format() string method for the board template. The list holds all of the board's times 
    (and empty spaces) going left to right, top to bottom.'''
    tileChars = []
    for rowIndex in range(BOARD_HEIGHT):
        for columnIndex in range(BOARD_WIDTH):
            tileChars.append(board[(columnIndex, rowIndex)])

    # display the board
    print('''
     1234567
    +-------+
    |{}{}{}{}{}{}{}|
    |{}{}{}{}{}{}{}|
    |{}{}{}{}{}{}{}|
    |{}{}{}{}{}{}{}|
    |{}{}{}{}{}{}{}|
    |{}{}{}{}{}{}{}|
    +-------+'''.format(*tileChars))


def askForPlayerMove(playerTile, board):
    """Let a player select a column on the board to drop a tile into.
    REturns a tuple of the (column, row) that the tile falls into."""

    while True:  # Keep asking the player until they enter a valid move
        print('Player {}, enter a column or QUIT:'.format(playerTile))
        response = input('> ').upper().strip()

        if response == 'QUIT':
            print('Thanks for playing!')
            sys.exit()

        if response not in COLUMN_LABELS:
            print('Enter a number form 1 to {}.'.format(BOARD_WIDTH))
            continue  # Ask the player again for their move

        columnIndex = int(response) - 1  # -1 for 0-based the index

        # if column is full, ask for a move again.
        if board[(columnIndex, 0)] != EMPTY_SPACE:
            print('That column is full, select another one.')
            continue  # ask the player again for their move.

        # Starting from the bottom, find the first empty space
        for rowIndex in range(BOARD_HEIGHT - 1, -1, -1):
            if board[(columnIndex, rowIndex)] == EMPTY_SPACE:
                return (columnIndex, rowIndex)


def isFull(board):
    """Returns True if the board has no empty spaces , otherwise returns False."""
    for rowIndex in range(BOARD_HEIGHT):
        for columnIndex in range(BOARD_WIDTH):
            if board[(columnIndex, rowIndex)] == EMPTY_SPACE:
                return False  # found an empty space, so return False
    return True  # All spaces are full


def isWinner(playerTile, board):
    """Returns True id the playerTile has four tiles in a row """

    # Go through the entire board, checking for four in a row
    for columnIndex in range(BOARD_WIDTH - 3):
        for rowIndex in range(BOARD_HEIGHT):
            # check for horizontal four in a row going right
            tile1 = board[(columnIndex, rowIndex)]
            tile2 = board[(columnIndex + 1, rowIndex)]
            tile3 = board[(columnIndex + 2, rowIndex)]
            tile4 = board[(columnIndex + 3, rowIndex)]
            if tile1 == tile2 == tile3 == tile4 == playerTile:
                return True

    for columnIndex in range(BOARD_WIDTH):
        for rowIndex in range(BOARD_HEIGHT - 3):
            # Check for vertical four in a row
            tile1 = board[(columnIndex, rowIndex)]
            tile2 = board[(columnIndex, rowIndex + 1)]
            tile3 = board[(columnIndex, rowIndex + 2)]
            tile4 = board[(columnIndex, rowIndex + 3)]
            if tile1 == tile2 == tile3 == tile4 == playerTile:
                return True

    for columnIndex in range(BOARD_WIDTH - 3):
        for rowIndex in range(BOARD_HEIGHT - 3):
            # Check for four in a row going right down diagonal
            tile1 = board[(columnIndex, rowIndex)]
            tile2 = board[(columnIndex + 1, rowIndex + 1)]
            tile3 = board[(columnIndex + 2, rowIndex + 2)]
            tile4 = board[(columnIndex + 3, rowIndex + 3)]
            if tile1 == tile2 == tile3 == tile4 == playerTile:
                return True

            # Check for four in a row going left down diagonal
            tile1 = board[(columnIndex + 3, rowIndex)]
            tile2 = board[(columnIndex + 2, rowIndex + 1)]
            tile3 = board[(columnIndex + 1, rowIndex + 2)]
            tile4 = board[(columnIndex, rowIndex + 3)]
            if tile1 == tile2 == tile3 == tile4 == playerTile:
                return True
    return False


# if the program is run and notimported
if __name__ == '__main__':
    main()
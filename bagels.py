'''Bagels a deductive logic game by Al Sweigart
A deductive logic game where you must guess a number based on clues. '''
import random
NUM_DIGITS  = 3
MAX_GUESSES = 10

def main():
    print('''Bagels, a deductive logic game. 
    I am thinking of a {}-digit number with no repeated digits. 
    Try to guess what it is. Here are some clues:
    When I say:  That means:
       Pico         One digit is correct but in the wrong position.
       Fermi        One digit is correct and in the right position.
       Bagels       No Digit is correct
    For example, if the secret number was 248 and your guess was 843, the clues would be Fermi Pico.
    '''.format(NUM_DIGITS))

    while True:  # Main game loop
        # This stores the secret number the player needs to guess:
        secretNum = getSecretNum()
        print('I have thought up a number.')
        print('You have {} guesses to get it.'.format(MAX_GUESSES))


        numGuesses  =  1

        while numGuesses <= MAX_GUESSES:
            guess = ''
            #Keep looping until they enter a valid guess
            while len(guess) != NUM_DIGITS or not guess.isdecimal():
                print('Guess #{}: '.format(numGuesses))
                guess = input('> ')

                clues = getClues(guess, secretNum)
                print(clues)
                numGuesses += 1

                if guess == secretNum:
                    break  # they are correct, so break out of the loop
                if numGuesses > MAX_GUESSES:
                    print('You ran out of guesses.')
                    print('The answer was {}'.format(secretNum))

        # ask the player if they want to play again.
        print('Do you want to play again? (yes or no)')
        if not input('> ').lower().startswith('y'):
            break
    print('Thanks for playing!')

def getSecretNum():
    """Returns a string made up of NUM_DIGITS unique random digits."""
    numbers = list('0123456789')  # Create a list of digit s 0 to 9
    random.shuffle(numbers)  # shuffle them into random order

    # get the First NUM_DIGITS digits in the list for the secret number:
    secretNum = ''
    for i in range(NUM_DIGITS):
        secretNum += str(numbers[i])
    return secretNum

def getClues(guess, secretNum):
    """"Returns a string with the pico, fermi, bagels blues for a guess and secret number pair."""
    if guess == secretNum:
        return 'You got it!'

    clues = []

    for i in range(len(guess)):
        if guess[i] == secretNum[i]:
            # A correct digit is in the correct place
            clues.append('Fermi')
        elif guess[i] in secretNum:
            # a correct digit is in the incorrect place
            clues.append('Pico')
    if len(clues) ==0:
        return 'Bagels' # there are no correct digits at all.
    else:
        #sort the clues into alphabetical order so their original order
        # doesn't give information away.
        clues.sort()
        # Make a single string from the list of string clues.
        return ''.join(clues)

# If program is run (instead of imported) run the game:
if __name__ == '__main__':
    main()
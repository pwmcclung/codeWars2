"""Guess the Number, inspired by Al Sweigart, al@inventwithpython.com
Try to guess a secret number based on hints."""

import random


def askForGuess():
    while True:
        guess = input('> ')   # Enter the guess

        if guess.isdecimal():
            return int(guess)  # Convert string guess into an integer
        print('Please enter a number between 1 and 100')

print('Guess the Number')
print()
secretNumber  = random.randint(1, 100) # Select a random number
print('I am thinking of a number between 1 and 100.')

for i in range(10):  # Give the player ten guesses
    print('You have {} guesses left. Take a guess.'.format(10 -i))

    guess = askForGuess()
    if guess == secretNumber:
        break  # Break out of the loop if the guess is correct

    # Offer a hint
    if guess < secretNumber:
        print('Your guess is too low.')
    if guess > secretNumber:
        print('Your guess is too high.')

# Reveal the results
if guess == secretNumber:
    print('Yay! You guessed my number!')
else:
    print('Game over. The number I was thinking of was', secretNumber)


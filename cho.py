"""Cho-Han, inspired by Al Sweigart. al@inventwithpython.com
The traditional Japanese dice game of even-odd."""

import random, sys

JAPANESE_NUMBERS = {1:'ICHI', 2:'NI', 3:'SAN',4:'SHI', 5: 'GO', 6: 'ROKU' }

print('''Cho-Han!!!
In this traditional Japanese dice game, two dice are rolled in a bamboo cup by the dealer sitting on the floor. The player must guess if the 
dice total to an even(cho) or odd (han) number. 
''')

purse = 5000

while True:  # Main game loop .
    #place your bet
    print('You have', purse, 'mon. How much do you bet? (or QUIT)')
    while True:
        pot = input('> ')
        if pot.upper() == 'QUIT':
            print('Thanks for playing!')
            sys.exit()
        elif not pot.isdecimal():
            print('Please enter a number.')
        elif int(pot) > purse:
            print('You do not have enough to make that bet.')
        else:
            # this is a valid bet.
            pot = int(pot)  # convert pot to an integer.
            break # Exit the loop once a valid bet is placed.

    # roll the dice
    dice1 = random.randint(1,6)
    dice2 = random.randint(1,6)

    print('The dealer swirls the cup and you hear the rattle of dice.')
    print('The dealer slams the cup on the floor, still covering the')
    print('dice and asks for your bet.')
    print()
    print( '   CHO (even) or HAN (odd)?')

    # Let the player bet cho or han
    while True:
        bet = input('> ').upper()
        if bet != 'CHO' and bet != 'HAN':
            print('Please enter either "CHO" or "HAN".')
            continue
        else:
            break

    #Reveal the dice results
    print('The dealer lifts the cup to reveal:')
    print(' ', JAPANESE_NUMBERS[dice1], '-', JAPANESE_NUMBERS[dice2])
    print(' ', dice1, '-', dice2)

    # determine if the player won:
    rollIsEven = (dice1 + dice2) % 2 ==0
    if rollIsEven:
        correctBet = 'CHO'
    else:
        correctBet = 'HAN'

    playerWon = bet == correctBet

    # display the bet results
    if playerWon:
        print('You won! You take', pot, 'mon.')
        purse = purse + pot # add the pot from player's purse
        print('The house collects a', pot // 10, 'mon fee.')
        purse = purse - (pot // 10) # the house fee is 10%
    else:
        purse = purse - pot # subtract the pot from the player's purse.
        print('You lost!')

        # Check if the player has run out of money.
        if purse == 0:
            print('you have run out of money!')
            print('Thanks for playing!')
            sys.exit()


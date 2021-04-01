# this def creates the function
def baby_shark_lyrics():
    # this line creates a sharks list
    sharks = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', 'Let\'s go hunt'] 
    # this line initializes a variable, an empty string called output
    output = ''
    # this for loop will iterate over the sharks list and 
    for shark in sharks:
        # for each shark in the list, concatenate shark, a comma, 6 doos, and a newline to shark
        output += (shark + ',' + ' doo'*6 + '\n')*3 + shark + '!\n'
    # this line will return the output string plus the string run away
    return output + 'Run away,…'
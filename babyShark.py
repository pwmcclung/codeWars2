def baby_shark_lyrics():
    sharks = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', 'Let\'s go hunt'] 
    output = ''
    for shark in sharks:
        output += (shark + ',' + ' doo'*6 + '\n')*3 + shark + '!\n'
    return output + 'Run away,…'
def caffeine_buzz(n):
    word = ''
    
    if n % 3 == 0 and n % 4 == 0:
        word = 'Coffee'
    elif n % 3 == 0:
        word = 'Java'
    else:
        word = 'mocha_missing!'
        
    if (word == 'Java' or word == 'Coffee') and n % 2 == 0:
        return word + 'Script'
    else:
        return word
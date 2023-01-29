def crap(garden, bags, cap):
    newGard = [x for elem in garden for x in elem]
    crap = 0
    noCrap = 0
    doggy = 0
    for x in newGard:
        if x == '_':
            noCrap += 1
        elif x == '@':
            crap += 1
        elif x == 'D':
            doggy += 1
    capacity = bags * cap
    if doggy >0:
        return 'Dog!!'
    elif crap > capacity:
        return 'Cr@p'
    elif crap <= capacity:
        return 'Clean'
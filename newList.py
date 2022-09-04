def no_odds(values):
    newList = []
    for x in values:
        if x % 2 == 0:
            newList.append(x)
    return newList
            
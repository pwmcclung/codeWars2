def check_three_and_two(array):
    newDict = {}
    for x in array:
        if x in newDict:
            newDict[x] += 1
        else:
            newDict[x] = 1
    if 3 in newDict.values() and 2 in newDict.values():
        return True
    else:
        return False
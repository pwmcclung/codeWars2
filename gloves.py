def number_of_pairs(gloves):
    gloveDict = {}
    for x in gloves:
        if x in gloveDict:
            gloveDict[x] += 1
        else:
            gloveDict[x] = 1
    arr = list(gloveDict.values())
    newList = []
    for x in arr:
        if x >=2 :
            newList.append(x//2)
    return sum(newList)
    
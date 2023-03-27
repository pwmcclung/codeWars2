def two_by_two(animals):
    aniDict = {}
    if animals == []:
        return False
    if len(animals) ==1:
        return {}
    for x in animals:
        if x in aniDict:
            aniDict[x] += 1
        else:
            aniDict[x] = 1
    newArr = []
    for key,value in aniDict.items():
        if value >= 2:
            newArr.append(key)
    
    sorArr = sorted(newArr)
    newDict = {x: 2 for x in sorArr}
    return newDict
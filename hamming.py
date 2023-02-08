def hamming(a,b):
    lstA = [*a]
    lstB = [*b]
    newList = [idx for idx, (e1, e2) in enumerate(zip(lstA, lstB)) if e1 == e2]
    return len(lstA) - len(newList)
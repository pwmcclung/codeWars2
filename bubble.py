def bubblesort_once(l):
    newL = l.copy()
    for i in range(0, len(newL)):
        if i + 1 < len(newL):
            if newL[i] > newL[i+1]:
                tempValue = newL[i]
                newL[i] = newL[i + 1]
                newL[i+1] = tempValue
    return newL
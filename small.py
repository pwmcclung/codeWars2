def smallest(n):
    ssss = str(n)
    minny1, fromeroo1, to1 = n, 0, 0
    for i in range(len(ssss)):
        removed = ssss[:i] + ssss[i+1:]
        for j in range(len(removed)+1):
            num = int(removed[:j] + ssss[i] + removed[j:])
            if (num < minny1):
                minny1, fromeroo1, to1 = num, i, j
    return [minny1, fromeroo1, to1]
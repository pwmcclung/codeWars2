def removNb(n):
    newList = []
    answerIt= n * (n + 1) / 2
    for a in range(1, n+1):
        b = (answerIt - a) / (a + 1.0)
        if b.is_integer() and b <= n:
            newList.append((a, int(b)))
    return newList
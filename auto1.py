def automorphic(n):
    newN = n * n
    newNStr = str(newN)
    strN = str(n)
    if newNStr.endswith(strN):
        return 'Automorphic'
    else:
        return 'Not!!'
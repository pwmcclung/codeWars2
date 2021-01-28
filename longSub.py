def lcs(x, y):
    if len(x) == 0 or len(y) == 0:
        return ''
    if x[-1] == y[-1]:
        return lcs(x[:-1], y[:-1]) + x[-1]
    else:
        lcsOne = lcs(x,y[:-1])
        lcsTwo = lcs(x[:-1],y)
        if len(lcsOne) > len(lcsTwo):
            return lcsOne
        else:
            return lcsTwo
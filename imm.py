def elder_age(m,n,l,t):
    if m == 0 or n == 0:
        return 0
    if m > n:
        m, n = n, m
    lM, lN = mP(m), mP(n)
    if l > lN:
        return 0
    if lM == lN:
        return (wH(1, lN - l - 1) * (m + n - lN) + elder_age(lN - n, lM - m, l, t)) % t
    if lM < lN:
        lM = lN // 2
        oF = wH(1, lN - l - 1) * m - (lN - n) * wH(max(0, lM - l), lN - l - 1)
        if l <= lM:
            oF += (lM - l) * (lM - m) * (lN - n) + elder_age(lM - m, lN - n, 0, t)
        else:
            oF += elder_age(lM - m, lN - n, l - lM, t)
        return oF % t

def wH(l,r):
    return (l+r) * (r-l+1) // 2

def mP(x):
    d = 1
    while d < x:
        d <<= 1
    return d
def revrot(s, n, res=""):
    if not s or n < 1 or n > len(s):
        return ""

    while len(s) >= n:
        newArr = s[:n]
        if sum([int(d)**3 for d in newArr ]) % 2 == 0:
            res += newArr [::-1]
        else:
            res += newArr [1:] + newArr[0]
        s = s[n:]

    return res
def freq_seq(s, sep):
    arr = [*s]
    freq = {}
    for x in arr:
        if x in freq:
            freq[x] += 1
        else:
            freq[x] = 1
    newArr = [freq.get(x, '')for x in arr]
    newList = [str(x) for x in newArr]
    return sep.join(newList)
    
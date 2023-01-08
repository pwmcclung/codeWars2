def seqlist(first,c,l):
    lst = [first,]
    while len(lst)<l:
        first = first + c
        lst.append(first)
    return lst
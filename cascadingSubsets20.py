def each_cons(lst, n):
    result = []
    for r in range(len(lst)):
        if r+n <= len(lst):
            result.append(lst[r:r+n])
    return result
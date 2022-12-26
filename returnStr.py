def even_chars(st): 
    if len(st) > 100 or len(st) <2:
        return 'invalid string'
    arr = list(st)
    newArr = []
    count = 0
    for x in arr:
        count += 1
        if count % 2 == 0:
            newArr.append(x)
    return newArr
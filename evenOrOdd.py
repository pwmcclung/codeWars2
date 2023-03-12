def even_or_odd(s):
    arr = [ int(i) for i in str(s)]
    evens = 0
    odd = 0
    for x in arr:
        if x % 2 == 0:
            evens +=x
        else:
            odd += x
    if evens > odd:
        return 'Even is greater than Odd'
    elif evens < odd:
        return 'Odd is greater than Even'
    else:
        return 'Even and Odd are the same'
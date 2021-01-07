def proper_fractions(n):
    theAns = n > 1 and n
    for x in range(2, int(n ** .5) + 1):
        if not n % x:
            theAns -= theAns // x
            while not n % x:
                n //= x
    if n > 1: theAns -= theAns // n
    return theAns
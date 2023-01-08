def nthterm(first, n , c):
    arr = [first,]
    x = 0
    while x != n:
        first = first + c
        arr.append(first)
        x += 1
        if x == n:
            return arr[x]
    
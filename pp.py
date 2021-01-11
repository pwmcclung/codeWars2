def isPP(n):
    for i in range(2, int(n**.5) + 1):
        num = n
        mult = 0
        while num % i == 0:
            num /= i
            mult += 1
            if num == 1:
                return [i, mult]
    return None
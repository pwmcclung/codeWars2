def primes(n):
    primfactors = 0
    d = 2
    while d * d <= n:
        while (n % d) == 0:
            primfactors += 1  
            n //= d
        d += 1
    if n > 1:
        primfactors += 1
    return primfactors

def count_Kprimes(k, start, nd):
    return [i for i in range(start, nd + 1) if primes(i) == k]

def puzzle(s):
    result = 0
    for a in count_Kprimes(1, 1, s - 2):
        for b in count_Kprimes(3, 1, s - a):
            c = s - a - b
            if c > 0 and primes(c) == 7:
                result += 1
    return result
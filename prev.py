def gap(g, m, n):
    previous = 2
    for x in range(m|1, n + 1, 2):
        if all(x%d for d in range(3, int(x**.5) + 1, 2)):
            if x - previous == g: return [previous, x]
            previous = x
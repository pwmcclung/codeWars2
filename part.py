def product(n):
    a = [{1.}]
    for i in range(1, n+1):
        a.append({(i - x) * j for x, s in enumerate(a) for j in s})
    return a[-1]

def part(n):
    b = sorted(product(n))
    return "Range: %d Average: %.2f Median: %.2f" % \
            (b[-1] - b[0], sum(b) / len(b), (b[len(b)//2] + b[~len(b)//2]) / 2)
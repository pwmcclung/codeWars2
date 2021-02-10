def find_part_max_prod(n):
    if n == 1: return [[1], 1]
    quotient, remainder = divmod(n, 3)
    if remainder == 0: return [[3]*quotient, 3**quotient]
    if remainder == 1: return [[4] + [3]*(quotient - 1), [3]*(quotient - 1) + [2, 2], 3**(quotient - 1) * 2**2]
    return [[3]*quotient + [2], 3**quotient * 2]
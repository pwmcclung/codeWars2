from itertools import combinations_with_replacement

def find_all(sum_dig, digs):
    combos = combinations_with_replacement(list(range(1, 10)), digs)
    targ = [''.join(str (x) for x in list(comb)) for comb in combos if sum(comb) == sum_dig]
    if not targ:
        return []
    return [len(targ), int(targ[0]), int(targ[-1])]
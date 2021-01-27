def sum_pairs(lst, s):
    collection = set()
    for i in lst:
        if s - i in collection:
            return [s - i, i]
        collection.add(i)
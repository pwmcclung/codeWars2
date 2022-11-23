def most_frequent_item_count(collection):
    if len(collection) == 0:
        return 0
    freq = {}
    for x in collection:
        if x in freq:
            freq[x] += 1
        else:
            freq[x] = 1
        
    max_val = max(freq.values())
    return max_val
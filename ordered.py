def ordered_count(inp):
    dict = {}
    for x in inp:
        if x in dict:
            dict[x] += 1
        else:
            dict[x] = 1
            
    list = [(k, v) for k, v in dict.items()]
    return list
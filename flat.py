def flatten_me(lst):
    flat_list = []
    for item in lst:
        if type(item) == list:
            flat_list = flat_list  + flatten_me(item)
        else:
            flat_list.append(item)
    return flat_list


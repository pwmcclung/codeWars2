def merge_arrays(first, second): 
    lst = first + second
    newlist = list( dict.fromkeys(lst) )
    newlist.sort()
    return newlist

    

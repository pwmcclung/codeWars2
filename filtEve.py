def kata_13_december(lst): 
    # Fix this code
    newlst = []
    for i in range(len(lst)): 
        if lst[i] %2 !=0: 
            newlst.append(lst[i])
    return newlst
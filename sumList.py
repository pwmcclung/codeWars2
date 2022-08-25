
def sum_no_duplicates(l):
    newlist = []
    for i in l:
        if l.count(i)== 1:
            newlist.append(i)
    return sum(newlist)
def bald(s):
    lst = [*s]
    count = 0
    newStr = len(s) * '-'
    for x in lst:
        if x == '/':
            count += 1
    if count == 0:
        return [newStr,"Clean!"]
    elif count == 1:
        return [newStr,"Unicorn!"]
    elif count == 2:
        return [newStr,"Homer!"]
    elif count >2 and count <6:
        return [newStr,"Careless!"]
    elif count >5:
        return [newStr,"Hobo!"]
    
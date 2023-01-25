def snail(column, day, night):
    newDay = day
    count = 1
    while newDay < column:
        newDay += day - night
        count += 1
    return count
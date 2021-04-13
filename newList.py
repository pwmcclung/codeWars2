def no_odds(values):
    # this line establishes an empty list
    newList = []
    # this forloop iterates over the values array
    for x in values:
        # if the element diviced by 2 is 0
        if x % 2 == 0:
            # we append the element to the newlist list
            newList.append(x)
    # return the new list
    return newList
            
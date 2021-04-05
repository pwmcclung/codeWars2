
def sum_no_duplicates(l):
    #this line creates an empty list called newlist
    newlist = []
    # this for loop iterates over the items in l
    for i in l:
        # this if statement checks to see if the count of (i) is equal to 1, using the count function
        if l.count(i)== 1:
            #if the count is 1 the item is appended to the newlist list
            newlist.append(i)
    # this uses the sum function to calculate the sum of newlist and return the result
    return sum(newlist)
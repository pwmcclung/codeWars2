# code walkthrough
# this line sets up the function, accepting one parameter called arr
def duplicates(arr):
    # this line initializes an empty dictionary
    table = {}
    # this line initializes a variable called total
    total = 0  
    # this line creates a for loop that iterates over the array
    for x in arr:
        # for each iteratation total is increased by one
	    total += 1
        # value is a variable set to equal x
	    value = x
        # the if statement checks if the value is in table
	    if value in table: 
            # if the value is not is in table it is added and 1 is added
		    table[value] += 1
        # else it is there and 1 is added
	    else: 
            # this adds one
		    table[value] = 1
    # this line creates a new list from the values in the table
    newL = list(table.values())
    # this line intializes an empty array
    newArr = []
    # this line starts a for loop that iterates over the newL list
    for x in newL:
        # it divides the element by 2 and appends (adds) the result to the newArr list
        newArr.append(x // 2)
    # this line initializes a count variable
    count  = 0
    # a for loop that iterates over the newArr list
    for y in newArr:
        # if the element is greater than zero
        if y > 0:
            # count is increased by the value in y
            count += y
    # count is returned      
    return count
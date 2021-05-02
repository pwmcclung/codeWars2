
def duplicates(arr):
    table = {}
    total = 0  
    for x in arr:
	    total += 1
	    value = x
	    if value in table: 
		    table[value] += 1
	    else: 
		    table[value] = 1
    
    newL = list(table.values())
    newArr = []
    for x in newL:
        newArr.append(x // 2)
    count  = 0
    for y in newArr:
        if y > 0:
            count += y
            
    return count
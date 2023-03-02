def largest_sum(s):
    arr1 = s.split('0',)
    arr2 = []
    sumArr = []
    for x in arr1:        
        if x != '':
            arr2.append(int(x))
    for y in arr2:
        sumNum = sum([int(d) for d in str(y)])
        sumArr.append(sumNum)   
    if len(sumArr) > 0:
        return max(sumArr)
    else:
        return 0
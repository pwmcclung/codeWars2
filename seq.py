def maxSequence(arr):
    maximumArr,currentArr=0,0
    for x in arr:
        currentArr+=x
        if currentArr<0:currentArr=0
        if currentArr>maximumArr:maximumArr=currentArr
    return maximumArr
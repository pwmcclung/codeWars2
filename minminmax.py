def minMinMax(arr):
    smallest = min(arr)
    largest = max(arr)
    newArr = []
    i = smallest
    while i <=largest:
        i += 1
        newArr.append(i)
    list2 = []
    for el in newArr:
        if el not in arr:
            list2.append(el)
    minAbsent = list2[0]
    return [smallest, minAbsent, largest]
def unique_in_order(iterable):
    arr = [*iterable]
    newArr = []
    for i in range(len(arr)):
        if i ==0 or arr[i] != arr[i-1]:
            newArr.append(arr[i])
    return newArr


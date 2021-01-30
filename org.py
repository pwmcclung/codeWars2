def group(arr):
    arr1 = []
    arr2 = []
    [arr1.append([i]*arr.count(i)) for i in arr]
    [arr2.append(i) for i in arr1 if i not in arr2]
    return arr2
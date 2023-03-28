def consecutive(arr):
    arr.sort()
    if len(arr) < 2:
        return 0
    x = arr[0]
    arr1 = []
    while x <= arr[-1]:
        arr1.append(x)
        x += 1
    return len(arr1) - len(arr)
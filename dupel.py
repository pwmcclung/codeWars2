def find_dup(arr):
    for x in arr:
        if arr.count(x) > 1:
            return x
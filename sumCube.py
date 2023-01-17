def sum_cubes(n):
    count = 1
    arr = []
    while count <= n:
        arr.append(count)
        count += 1
    cubeArr = []
    for x in arr:
        cubeArr.append(x ** 3)
    summed = sum(cubeArr)
    return summed
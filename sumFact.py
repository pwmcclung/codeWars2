def factMaker(num):
    prod = 1
    arr = []
    n = 1
    while n <= num:
        arr.append(n)
        n += 1
    for x in arr:
        prod = prod * x
        
    return prod

def sum_factorial(lst):
    newArr = []
    for num in lst:
        newArr.append(factMaker(num))
    return sum(newArr)
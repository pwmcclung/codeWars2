def zeros(num):
    count = 0
    i = 5
    if num < 0:
        return False
    while num//i > 0:
        count = count + num//i
        i = i * 5
    return count
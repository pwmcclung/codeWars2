def next_bigger(num: int) -> int:
    digitNum: list = list(str(num))
    maxNummy = int(''.join(map(str, sorted(digitNum, reverse=True))))
    minNummy = int(''.join(map(str, sorted(digitNum))))
    myNummy = num
    while myNummy <= maxNummy:
        myNummy += 1
        if int(''.join(map(str, sorted(list(str(myNummy)))))) == minNummy:
            return myNummy
    else:
        return -1
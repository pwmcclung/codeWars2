def speed_limit(speed, signals):
    newArr = []
    for x in signals:
        newArr.append(speed - x)
    cost = 0
    for y in newArr:
        if y > 9 and y < 20:
            cost +=100
        elif y > 19 and y < 30:
            cost += 250
        elif y > 29:
            cost += 500
    return cost
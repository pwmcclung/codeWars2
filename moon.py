def fold_to(distance):
    if distance < 0:
        return None
    thick = 0.0001
    count= 0
    while thick <distance:
        thick = thick * 2
        count += 1
    return count
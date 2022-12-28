def get_ages(sum_, difference):
    half = sum_ / 2
    diff = difference / 2
    if half < 0 or difference < 0:
        return None
    else:
        one = float( half + diff)
        two = float(half - diff)
    if one < 0 or two < 0:
        return None
    else:
        return (one, two)
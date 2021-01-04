def mormons(start, reach, target, end=0):
    if start >= target:
        return end
    return mormons(start + (start * reach), reach, target, end + 1)